import { getArtist, createArtist, updateGrid } from "./rest-service.js";

window.addEventListener("load", start);

let artists;

async function start() {
  console.log("der er hul igennem");
  artists = await getArtist();
  console.log(artists);

  showArtists(artists);
  document
    .querySelector("#btn-create-artist")
    .addEventListener("click", createArtistClicked);
  document
    .querySelector("#btn-update-artist")
    .addEventListener("click", updateGridClicked);
}

function showArtists(artists) {
  for (const artist of artists) {
    console.log(artist);
    document.querySelector("#artists-grid").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
     
    <article class="grid-container">
      <h2>${artist.name} </h2>
      <img class=artist-img src="${artist.image}">
      <p>${artist.genres}</p>
      <button class="btn-cancel-update-artist">UPDATE</button>
      <button class="btn-delete">DELETE</button>
     </article >
     `
    );
    document
      .querySelector("article:last-child .btn-delete")
      .addEventListener("click", () => clickDelete(artist));
    document
      .querySelector("article:last-child .btn-cancel-update-artist")
      .addEventListener("click", () => updateGridClicked());
  }
}

async function createArtistClicked(event) {
  document.querySelector("#create-dialog").showModal();
  document
    .querySelector("#form-create-artist")
    .addEventListener("submit", createArtistSubmitted);
  document
    .querySelector("#btn-cancel-create-artist")
    .addEventListener("click", closeDialog);
}

async function updateGridClicked(event) {
  document.querySelector("#update-dialog").showModal();

  document
    .querySelector("#form-update-artist")
    .addEventListener("submit", updateGridSubmitted);
  document
    .querySelector("#btn-cancel-update-artist")
    .addEventListener("click", closeDialog);
}

function createArtistSubmitted(event) {
  event.preventDefault();

  const form = event.target;
  const artist = {
    name: form.name.value,
    birthdate: form.birthdate.value,
    activeSince: form.activeSince.value,
    genres: form.genres.value,
    labels: form.labels.value,
    website: form.website.value,
    image: form.image.value,
    shortDescription: form.shortDescription.value,
  };

  createArtist(artist);
}

function closeDialog() {
  document.querySelector("#create-dialog").close();
  document.querySelector("#update-dialog").close();
  console.log("cancel");
}

function updateGridSubmitted(event) {
  event.preventDefault();

  const form = event.target;
  const artist = {
    name: form.name.value,
    birthdate: form.birthdate.value,
    activeSince: form.activeSince.value,
    genres: form.genres.value,
    labels: form.labels.value,
    website: form.website.value,
    image: form.image.value,
    shortDescription: form.shortDescription.value,
  };
  updateGrid(artist);
}

function clickDelete(artist) {
  console.log("delete er klikket");
}

export { artists };
