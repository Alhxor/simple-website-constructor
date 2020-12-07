import { block } from "../utils";
import { Title, Text, Columns, Image } from "./blocks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.add.bind(this));
  }

  get template() {
    return [
      block("title"),
      block("text"),
      // block("columns"),
      // block("image"),
    ].join("");
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const style = event.target.style.value;

    const block =
      type === "title"
        ? new Title(value, { style })
        : type === "text"
        ? new Text(value, { style })
        : // : type === "columns"
          // ? new Columns(value, { style })
          // : type === "image"
          // ? new Image(value, { style })
          "";

    this.update(block);
  }
}
