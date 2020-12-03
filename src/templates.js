import { row, col, css } from "./utils";

export const templates = { title, text, columns, image };

function title(block) {
  const { tag = "h1", style } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(style));
}

function text(block) {
  return row(col(block.value), css(block.options.style));
}

function columns(block) {
  return row(block.value.map(col).join(""), css(block.options.style));
}

function image(block) {
  const { style, imgStyle = {}, alt = "" } = block.options;
  return row(
    col(`<img src="${block.value}" style="${css(imgStyle)}" alt="${alt}" />`),
    css(style)
  );
}
