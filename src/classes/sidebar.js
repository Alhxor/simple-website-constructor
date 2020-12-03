import { block } from "../utils";

export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener('submit', this.add)
  }

  get template() {
    return [
      block("Title"),
      block("Text"),
      block("Columns"),
      block("Image"),
    ].join("");
  }

  add(event) {
    event.preventDefault()

    const type = event.target.name
    const value = event.target.value.value
    const style = event.target.style.value

    // debugger
  }
}
