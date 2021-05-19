import { render } from "./render";
import type { FileObject, ShapeChildren } from "../objects/types";

export function diff(oldVTree: FileObject, newVTree: FileObject) {
  const patchChildren = diffChildren(oldVTree.children, newVTree.children);
  const patchAttr = diffAttributes(oldVTree.attr, newVTree.attr);

  return (fileElement: SVGElement) => {
    patchChildren(fileElement);
    patchAttr(fileElement);
    return fileElement;
  };
}

function diffChildren(oldChild: object[], newChild: object[]) {
  if (oldChild === undefined && newChild === undefined) {
    return (element: SVGElement) => element;
  }
  const add: Function[] = [];
  const oldPatch: Function[] = [];

  const diffChild = newChild.slice(oldChild.length);
  diffChild.forEach((child) => {
    add.push((element: HTMLElement) => {
      const cr = render(child as ShapeChildren);
      element.appendChild(cr);
      return element;
    });
  });

  oldChild.forEach((child, index) => {
    oldPatch.push(diff(child as FileObject, newChild[index] as FileObject));
  });

  return (element: SVGElement) => {
    for (const [patch, child] of zip(oldPatch, element.childNodes)) {
      // @ts-ignore
      patch(child);
    }
    for (const patch of add) {
      patch(element);
    }
    return element;
  };
}

function diffAttributes(oldAttrs: {}, newAttrs: {}) {
  const patches: Function[] = [];

  for (const [k, v] of Object.entries(newAttrs)) {
    patches.push((element: HTMLElement) => {
      element.setAttribute(k, v as string);
      return element;
    });
  }

  for (const k in oldAttrs) {
    if (!(k in newAttrs)) {
      patches.push((element: HTMLElement) => {
        element.removeAttribute(k);
        return element;
      });
    }
  }

  return (element: SVGElement) => {
    for (const patch of patches) {
      patch(element);
    }
  };
}

function zip(xs: Function[], ys: NodeListOf<ChildNode>) {
  const zipped = [];
  for (let i = 0; i < Math.max(xs.length, ys.length); i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
}
