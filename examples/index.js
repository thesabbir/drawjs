import { Draw, Rectangle, Circle, Path } from "../src";

(function App() {
  const root = document.getElementById("root");
  const d = new Draw(root);

  const r = new Rectangle(1, 1, 100, 200);
  const r2 = r.clone();
  r2.x = 400;

  const c = new Circle(250, 150, 10);
  const path = new Path("M 10 10 H 90 V 90 H 10 L 10 10");

  d.draw(r);
  d.draw(r2);
  d.draw(c);
  d.draw(path);

  setTimeout(() => {
    c.fill = "magenta";
    r.fill = "crimson";
    r2.fill = "aquamarine";
    path.fill = "indigo";
    r.y = 100;
  }, 2000);

  window.Draw = d;
})();

if (import.meta.hot) {
  import.meta.hot.accept();
}
