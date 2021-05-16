import { DrawFile } from "./DrawFile";
import { mapToArray } from "../helpers";

export class Draw {
  constructor(rootElm) {
    this._rootElm = rootElm;
    this._files = {};
    this._activeFile = {};
  }

  get files() {
    return mapToArray(this._files);
  }

  newFile(name) {
    const file = new DrawFile(name);
    this._files[file.uuid] = file;
    this._activeFile = file.uuid;
    return file;
  }

  get activeFile() {
    return this._files[this._activeFile];
  }

  set activeFile(file) {
    return this._files[file.uuid];
  }

  draw(shape) {
    this.activeFile.draw(shape, this._renderDom.bind(this));
    this._renderDom();
  }

  _renderDom(content = this.activeFile.toSVG()) {
    if (!this._rootElm) {
      return new Error("Root element not found");
    }
    this._rootElm.replaceChildren(content);
  }

  setup() {
    this.newFile();
    this._renderDom();
  }
}
