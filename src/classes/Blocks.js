import { row, col, css } from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error("Method toHTML should be defined");
  }
}

export class Title extends Block {
  toHTML() {
    const { tag = "h1", style } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(style));
  }
}

export class Text extends Block {
  toHTML() {
    return row(col(this.value), css(this.options.style));
  }
}

export class Columns extends Block {
  toHTML() {
    return row(this.value.map(col).join(""), css(this.options.style));
  }
}

export class Image extends Block {
  toHTML() {
    const { style, imgStyle = {}, alt = "" } = this.options;
    return row(
      col(`<img src="${this.value}" style="${css(imgStyle)}" alt="${alt}" />`),
      css(style)
    );
  }
}

export class BlockFactory {
  static blocks = {
    'title': Title,
    'text': Text,
    'columns': Columns,
    'image': Image
  }

  static createBlock(type = 'text', ...args) {
    const Constructor = BlockFactory.blocks[type]
    return new Constructor(...args)
  }
}
