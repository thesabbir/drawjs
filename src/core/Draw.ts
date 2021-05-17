import { DrawFile } from "./DrawFile";
import type { Shape } from "../objects/Shape";

/**
 * Code blocks are great for examples
 *
 * ```typescript
 * import { Draw } from '@thesabbir/drawjs';
 *
 * const rootElement = document.queryeSlector('root');
 * const draw = new Draw(rootElement);
 *
 * ```
 */
export class Draw {
  private readonly _rootElm: HTMLDivElement;
  private readonly _files: Map<DrawFile, DrawFile>;
  private _activeFile: DrawFile;

  constructor(rootElm: HTMLDivElement) {
    this._rootElm = rootElm;
    this._files = new Map<DrawFile, DrawFile>();
    this._activeFile = new DrawFile();
    this._renderDom();
  }

  get files() {
    return Array.from(this._files, ([_, values]) => values);
  }

  newFile(name: string) {
    const file = new DrawFile(name);
    this._files.set(file, file);
    this._activeFile = file;
  }

  get activeFile() {
    return this._activeFile;
  }

  set activeFile(file: DrawFile) {
    this._activeFile = file;
  }

  draw(shape: Shape) {
    this.activeFile.draw(shape, this._renderDom.bind(this));
    this._renderDom();
  }

  private removeAllChildren() {
    while (this._rootElm.firstChild) {
      this._rootElm.removeChild(this._rootElm.firstChild);
    }
  }

  private _renderDom(content = this.activeFile.toSVG()) {
    if (!this._rootElm) {
      return new Error("Root element not found");
    }
    this.removeAllChildren();
    this._rootElm.appendChild(content);
  }
}
