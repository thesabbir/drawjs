export function mount(file: SVGElement, element: HTMLElement) {
  const app = createAppNode(element, file);
  element.replaceWith(app);
  return app;
}

function createAppNode(element: HTMLElement, App: SVGElement): HTMLElement {
  const AppNode = document.createElement("div");
  AppNode.setAttribute("id", element.id);
  AppNode.appendChild(App);
  return AppNode;
}
