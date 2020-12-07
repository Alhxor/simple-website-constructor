import { Site } from "./site";
import { Sidebar } from "./sidebar";

export class App {
  constructor(model) {
    this.model = model;
  }

  init() {
    this.site = new Site("#site");

    const updateCallback = (newBlock) => {
      this.model.push(newBlock);
      this.site.render(this.model);
    };

    this.sidebar = new Sidebar("#panel", updateCallback);
    this.site.render(this.model);
  }
}
