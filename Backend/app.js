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
app.put("/artists", async (request, response) => {
  const newArtistUpdate = request.body;
  newArtistUpdate.id = uuidv4();
  console.log(newArtistUpdate);
  const data = await fs.readFile("artist.json");
  const artists = JSON.parse(data);
  artists.push(newArtistUpdate);
  fs.writeFile("artist.json", JSON.stringify(artists));
  response.json(artists);
});
app.delete("/artists", async (request, response) => {});
