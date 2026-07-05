import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ViewApp } from "./ViewApp.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ViewApp />
	</StrictMode>,
);
