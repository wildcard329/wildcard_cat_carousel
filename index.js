// script.js
import { carousel } from "./js/carousel.js";
import { getData } from "./js/api.js";

async function init() {
    const cats = await getData("https://api.thecatapi.com/v1/images/search?limit=5");
    carousel(cats, 'url');
}

// Load on page load
init();
