import { row, col, css } from "./utils";

export const templates = { title, text, columns, image };

function title(block) {
  const { tag = "h1", style } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(style));
}

function text(block) {
  return row(col(block.value))
}

function columns(block) {
  return row(block.value.map(col).join(''))
}

function image(block) {
  return row(col(`<img src="${block.value}" />`))
}

