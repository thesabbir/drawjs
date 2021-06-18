import { Draw, Rectangle, Circle, Path, Layer } from "../../src";
import "./style.css";

(function App() {
  const root = document.getElementById("root");
  const d = new Draw(root);

  const r = new Rectangle(1, 1, 100, 200);
  const r2 = r.clone();
  r2.x = 400;

  const c = new Circle(250, 150, 10);
  const path = new Path("M 10 10 H 90 V 90 H 10 L 10 10");
  d.draw(r);

  setTimeout(() => {
    const l = new Layer("layer 20");
    d.activeFile.addLayer(l);
    d.draw(c);
    d.draw(path);
  }, 5000);
  setTimeout(() => {
    const l = new Layer("layer 30");
    d.activeFile.addLayer(l);
    d.draw(r2);
  }, 5000);

  const colors = [
    "magenta",
    "crimson",
    "aquamarine",
    "indigo",
    "blue",
    "black",
    "green",
    "orange",
  ];
  const randCol = () => colors[(Math.random() * colors.length) | 0];
  setInterval(() => {
    c.fill = randCol();
    r.fill = randCol();
    r2.fill = randCol();
    path.fill = randCol();
  }, 5000);

  window.Draw = d;
})();

if (import.meta.hot) {
  import.meta.hot.accept();
}
