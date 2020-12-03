import "./styles/main.css";
import { model } from "./model";

const $site = document.querySelector("#site");

const html = model.map(block => block.toHTML()).join('')

$site.insertAdjacentHTML('beforeend', html)
