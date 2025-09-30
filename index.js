// script.js
import { getData } from "./js/api.js";
import { header } from "./js/header.js";
import { carousel } from "./js/carousel.js";
import data from "./configs/url.json" with { type: 'json' };

const root = document.querySelector("#root");

async function init() {
    const cats = await getData(`${data.api}/${data.random_uri}`);
    const breeds = await getData(`${data.api}/${data.breed_uri}`)
    header(root, breeds, 'name');
    carousel(root, cats, 'url');
}

// Load on page load
init();
