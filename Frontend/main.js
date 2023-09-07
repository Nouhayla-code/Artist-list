import {
  getArtist,
  createArtist,
  updateGrid,
  deleteArtist,
} from "./rest-service.js";

window.addEventListener("load", start);

let artists;
let theArtist;
let faves = [];

async function start() {
  console.log("der er hul igennem");
  artists = await getArtist();
  console.log(artists);

  showArtists(artists);

  // ----------eventlisteners------------
  document
    .querySelector("#btn-create-artist")
    .addEventListener("click", createArtistClicked);
  document
    .querySelector("#btn-fave-list")
    .addEventListener("click", showFavesList);

  document.querySelector("#btn-home").addEventListener("click", start);

  document.querySelector("#sort-after").addEventListener("change", chooseSort);
  document
    .querySelector("#search-bar")
    .addEventListener("keyup", (event) => search(event.target.value));
}

function showArtists(artists) {
  document.querySelector("#artists-grid").innerHTML = "";

  for (const artist of artists) {
    console.log(artist);
    document.querySelector("#artists-grid").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
     
    <article class="grid-container">
      <h2>${artist.name} </h2>
      <img class=artist-img src="${artist.image}">
      <p>${artist.genres}</p>
      <p>${artist.shortDescription}</p>
      <button class="btn-cancel-artist">UPDATE</button>
      <button class="btn-delete">DELETE</button>
      <button class="btn-faves"> ⭐</button>
     </article >
     `
    );

    // ------------knap functioner-----------
    document
      .querySelector("article:last-child .btn-delete")
      .addEventListener("click", () => clickDelete(artist.id));
    document
      .querySelector("article:last-child .btn-cancel-artist")
      .addEventListener("click", () => updateGridClicked(artist));
    document
      .querySelector("article:last-child .btn-faves")
      .addEventListener("click", () => addToFaves(artist));
  }
}

function addToFaves(artist) {
  if (faves.includes(artist)) {
    alert("Artist is already added to list !");
  } else {
    faves.push(artist);
    alert("Artist is added to list !");
    console.log(faves);
  }
}

function showFavesList() {
  showArtists(faves);
}

function createArtistClicked(event) {
  const createDialog = document.querySelector("#create-dialog");
  createDialog.showModal();
  document
    .querySelector("#form-create-artist")
    .addEventListener("submit", createArtistSubmitted);
  document
    .querySelector("#btn-cancel-artist-create")
    .addEventListener("click", () => closeDialog(createDialog));
}

function updateGridClicked(artist) {
  const updateDialog = document.querySelector("#update-dialog");
  updateDialog.showModal();

  theArtist = artist;

  document.querySelector("#name-update").value = artist.name;
  document.querySelector("#birthdate-update").value = artist.birthdate;
  document.querySelector("#activeSince-update").value = artist.activeSince;
  document.querySelector("#genres-update").value = artist.genres;
  document.querySelector("#labels-update").value = artist.labels;
  document.querySelector("#website-update").value = artist.website;
  document.querySelector("#image-update").value = artist.image;
  document.querySelector("#shortDescription-update").value =
    artist.shortDescription;

  document
    .querySelector("#form-update-artist")
    .addEventListener("submit", updateGridSubmitted);
  document
    .querySelector("#btn-cancel-artist-update")
    .addEventListener("click", () => closeDialog(updateDialog));
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

function closeDialog(dialog) {
  console.log("cancel");
  dialog.close();
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

function clickDelete(id) {
  const deleteDialog = document.querySelector("#delete-dialog");
  deleteDialog.showModal();

  document
    .querySelector("#delete-yes")
    .addEventListener("click", () => deleteArtist(id));

  document
    .querySelector("#delete-no")
    .addEventListener("click", () => closeDialog(deleteDialog));
  console.log("delete er klikket");
}

function chooseSort() {
  let value = document.querySelector("#sort-after").value;
  if (value === "name") {
    artists.sort(sortAfterName);
    showArtists(artists);
  } else if (value === "active year") {
    artists.sort(sortAfterActiveYears);
    showArtists(artists);
  }
}

function sortAfterName(a, b) {
  return a.name.localeCompare(b.name);
}
function sortAfterActiveYears(a, b) {
  return a.activeSince - b.activeSince;
}

function search(searchValue) {
  console.log(artists);
  console.log(searchValue);

  let searchList = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(searchList);
  showArtists(searchList);
}

export { artists, theArtist };
