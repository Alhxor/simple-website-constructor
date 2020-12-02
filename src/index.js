import "./styles/main.css";
import { model } from "./model";
import { templates } from "./templates";

const $site = document.querySelector("#site");

const html = model.map(block => {
  const template = templates[block.type]
  return template(block)
}).join('')


$site.insertAdjacentHTML('beforeend', html)
