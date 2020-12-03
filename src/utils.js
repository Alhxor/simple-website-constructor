export function row(content, style = "") {
  return `<div class="row" style="${style}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

export function css(style) {
  if (typeof style === "string") return style;
  const toString = (key) => `${key}: ${style[key]}`;
  return Object.keys(style).map(toString).join(";");
}

export function block(type) {
  return /*html*/ `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="style" placeholder="style">
      </div>
      <button type="submit" class="btn btn-primary btm-sm">Add</button>
    </form>
    <hr />
  `;
}
