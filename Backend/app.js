import fs from "fs/promises";
import cors from "cors";
import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
import { request } from "http";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/artists", async (request, response) => {
  const data = await fs.readFile("artist.json");
  const artists = JSON.parse(data);
  console.log(artists);
  response.json(artists);
});

app.listen(port, () => {
  console.log(`Serveren er startet på localhost port ${port}`);
});

app.post("/artists", async (request, response) => {
  const newArtist = request.body;
  newArtist.id = uuidv4();
  console.log(newArtist);
  const data = await fs.readFile("artist.json");
  const artists = JSON.parse(data);
  artists.push(newArtist);
  fs.writeFile("artist.json", JSON.stringify(artists));
  response.json(artists);
});

app.put("/artists/:id", async (request, response) => {
  const id = request.params.id;
  console.log(id);

  const data = await fs.readFile("artist.json");
  const artists = JSON.parse(data);

  let artistToUpdate = artists.find((artist) => artist.id === id);
  console.log(artistToUpdate);

  const body = request.body;
  console.log(body);
  artistToUpdate.name = body.name;
  artistToUpdate.birthdate = body.birthdate;
  artistToUpdate.activeSince = body.activeSince;
  artistToUpdate.genres = body.genres;
  artistToUpdate.labels = body.labels;
  artistToUpdate.website = body.website;
  artistToUpdate.image = body.image;
  artistToUpdate.shortDescription = body.shortDescription;

  fs.writeFile("artist.json", JSON.stringify(artists));
  console.log(artists);
  response.json(artists);
});

app.delete("/artists/:id", async (request, response) => {
  const id = request.params.id;
  console.log(id);
  const data = await fs.readFile("artist.json");
  const artists = JSON.parse(data);

  let artistToDelete = artists.find((artist) => artist.id === id);
  console.log(artistToDelete);

  let index = artists.indexOf(artistToDelete);

  artists.splice(index, 1);

  fs.writeFile("artist.json", JSON.stringify(artists));
  console.log(artists);
  response.json(artists);
});
