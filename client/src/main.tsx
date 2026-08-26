import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// O build entrega cada rota já pré-renderizada; nesse caso hidratamos o
// HTML existente em vez de descartá-lo e montar tudo de novo.
if (container.firstElementChild) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
