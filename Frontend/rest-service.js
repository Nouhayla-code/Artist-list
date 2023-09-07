import { artists } from "./main.js";

const endpoint = " http://localhost:3000";

async function getArtist() {
  // Hent JSON-dataen fra det angivne endepunkt
  const response = await fetch(`${endpoint}/artists`);
  const data = await response.json();
  return data;
}
async function createArtist(artist) {
  const newArtist = artist;

  console.log(newArtist);

  const json = JSON.stringify(newArtist);

  const response = await fetch(`${endpoint}/artists`, {
    method: "POST",
    body: json,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log(" ny artist oprettet");
    updateGrid();
    alert("Artist oprettet");
  }
}

async function updateGrid(artis) {
  const newArtistUpdate = artists;

  console.log(newArtistUpdate);

  const json = JSON.stringify(newArtistUpdate);

  const respone = await fetch(`${endpoint}/artists`, {
    method: "PUT",
    body: json,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (respone.ok) {
    console.log("Artist opdateret");
    alert("Artist opdateret");
  }
}

export { getArtist, createArtist, updateGrid };
