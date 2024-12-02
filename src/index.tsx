import "./sass/global.scss";
import { createRoot } from "react-dom/client";


import App from "./app";


const rootNode = document.getElementById("root");



if (!rootNode) {
	throw new Error("Not found root");
}

createRoot(rootNode).render(<App />);


