import image from "./assets/image.png";

export const model = [
  {
    type: "title",
    value: "Simple website constructor on JavaScript",
    options: { tag: "h2", style: { background: "black", color: "white", "text-align": "center" } },
  },
  { type: "text", value: "This is a text block" },
  {
    type: "columns",
    value: ["Column #1", "Column #2", "Column #3", "Column #4"],
  },
  { type: "image", value: image },
];
