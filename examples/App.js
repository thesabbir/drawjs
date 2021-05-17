import { useEffect, useRef } from "react";
import { Draw, Rectangle, Circle, Path } from "../src";

export default function App() {
  const ref = useRef(null);
  useEffect(() => {
    const d = new Draw(ref.current);

    d.setup();

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
      r.fill = "blue";
      r.y = 100;
      c.x = c.x + 50;
    }, 2000);

    window.Draw = d;
  }, []);

  return (
    <div
      id="grafix-example"
      ref={ref}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    />
  );
}
