import image from "./assets/image.png";
import { BlockFactory } from "./classes/blocks";

export const model = [
  BlockFactory.createBlock('title', "Simple website constructor on JavaScript", {
    tag: "h2",
    style: {
      background: "black",
      color: "white",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  BlockFactory.createBlock('text', "This is a text block", { style: { padding: "1rem" } }),
  BlockFactory.createBlock('columns', ["Column #1", "Column #2", "Column #3", "Column #4"], {
    style: {
      padding: "2rem",
    },
  }),
  BlockFactory.createBlock('image', image, {
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
