import { Draw, Rectangle } from "../../src";

(function App() {
  const root = document.getElementById("root");
  const d = new Draw(root);

  const rect = new Rectangle(1, 1, 100, 200);

  d.draw(rect);
})();
