import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

if (import.meta.hot) {
  import.meta.hot.accept();
}
