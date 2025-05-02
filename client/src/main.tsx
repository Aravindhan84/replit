import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Add Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent Font Awesome from auto-adding CSS to the page
config.autoAddCss = false;

createRoot(document.getElementById("root")!).render(<App />);
