class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
}

export class Title extends Block {
  type = 'title'
}

export class Text extends Block {
  type = 'text'
}

export class Columns extends Block {
  type = 'columns'
}

export class Image extends Block {
  type = 'image'
}
