import * as React from "react";
import CanvasDraw from "react-canvas-draw";

const LAZY_RADIUS: number = 0;
const BRUSH_RADIUS: number = 5;

const App = () => (
  <div>
    <h1>WriteBoard</h1>
    <CanvasDraw
      lazyRadius={LAZY_RADIUS}
      brushRadius={BRUSH_RADIUS} />
  </div>
);

export default App;
