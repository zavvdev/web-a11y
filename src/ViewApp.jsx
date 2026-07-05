import "./styles.css";
import { ViewA11yKeyboard } from "./ViewA11yKeyboard";
import { ViewA11yMotion } from "./ViewA11yMotion";
import { ViewA11yVisuallyImpaired } from "./ViewA11yVisuallyImpaired";

export function ViewApp() {
	return (
		<>
			<ViewA11yVisuallyImpaired />
			<ViewA11yKeyboard />
			<ViewA11yMotion />
		</>
	);
}
