import ReactDOM from "react-dom/client";

import { App } from "./App.jsx";
import "./index.scss";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
