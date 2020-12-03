import image from "./assets/image.png";
import { Title, Text, Columns, Image } from "./classes/blocks";

export const model = [
  new Title("Simple website constructor on JavaScript", {
    tag: "h2",
    style: {
      background: "black",
      color: "white",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new Text("This is a text block", { style: { padding: "1rem" } }),
  new Columns(["Column #1", "Column #2", "Column #3", "Column #4"], {
    style: {
      padding: "2rem",
    },
  }),
  new Image(image, {
    style: {
      padding: "1rem",
      "text-align": "center",
    },
    imgStyle: {
      width: "500px",
      height: "auto",
    },
    alt: "Sample image",
  }),
];
