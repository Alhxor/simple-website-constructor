export function row(content, style='') {
  return `<div class="row" style="${style}">${content}</div>`
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export function css(style) {
  const toString = key => `${key}: ${style[key]}`
  return Object.keys(style).map(toString).join(';')
}
