/**
 * @copyright (c) 2025 codewithandrew
 * @author codewithandrew
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 *Components
 * @description Main component of the application
 */
import App from "./App.jsx";

/**
 * Styles
 * @description Main styles of the application
 */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
