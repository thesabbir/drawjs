import { useEffect, useRef } from "react";
import { Draw, Rectangle, Circle } from "../src";

export default function App() {
  const ref = useRef(null);
  useEffect(() => {
    const d = new Draw(ref.current);

    d.setup();

    const r = new Rectangle(1, 1, 100, 200);
    const r2 = r.clone();
    const c = new Circle(250, 150, 10);
    c.fill = "magenta";
    r.x = 0;
    r.y = 0;
    r2.x = 200;
    r2.y = 200;
    d.draw(r);
    d.draw(r2);
    d.draw(c);
    setTimeout(() => {
      r.fill = "blue";
      r.y = 100;
      c.x = c.x + 50;
    }, 2000);
    setTimeout(() => {
      r2.fill = "red";
    }, 4000);

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
