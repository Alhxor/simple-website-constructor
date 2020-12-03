export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  render(model) {
    const html = model.map((block) => block.toHTML()).join("");
    this.$el.insertAdjacentHTML("beforeend", html);
  }
}
