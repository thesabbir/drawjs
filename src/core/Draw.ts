import { DrawFile } from "../objects/DrawFile";
import type { Shape } from "../objects/Shape";

/**
 * Usage Example
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
  private readonly _rootElm: HTMLElement;
  private readonly _files: Map<DrawFile, DrawFile>;
  private _activeFile: DrawFile;

  constructor(rootElm: HTMLDivElement) {
    this._rootElm = rootElm;
    this._files = new Map<DrawFile, DrawFile>();
    this._activeFile = new DrawFile("Untitled.svg", rootElm);
  }

  get files() {
    return Array.from(this._files, ([_, values]) => values);
  }

  newFile(name: string) {
    const file = new DrawFile(name, this._rootElm);
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
    this.activeFile.draw(shape);
  }
}
