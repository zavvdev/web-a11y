export function ViewA11yKeyboard() {
	return (
		<div>
			<h1>Keyboard A11y</h1>
			<section>
				<h2>Tab Index</h2>
				<p>
					tabindex is an HTML attribute that controls whether an element can
					receive keyboard focus and where it appears in the tab order when the
					user presses the Tab key.
				</p>
				<p>
					<b>tabindex=0</b> - Makes an element focusable and places it in the
					natural tab order based on its position in the DOM. Use this when you
					have a custom interactive element that should be reachable by
					keyboard.
				</p>
				<p>
					<b>tabindex=-1</b> - Makes an element focusable, but not via the Tab
					key. The user can’t reach the element by tabbing, but JavaScript can
					focus it.
				</p>
				<p>
					<b>tabindex=1 (or any positive value)</b> - Assigns an explicit tab
					order. Only after all positive values are visited does focus move to
					naturally focusable elements. Avoid positive values. They create a
					custom focus order that’s hard to maintain and can confuse keyboard
					users if the page changes.
				</p>
				<p>
					Many HTML elements are already focusable and do not need tabindex:
					button, input select, textarea, a, summary.
				</p>
				<p>
					Possible use-case for tabindex=0 can also be if you have a div with a
					scrollable content and you want to be able to focus that content with
					tab in order to scroll it with your keyboard. You can assign
					tabindex=0 to that div so it can be focused. But don't forget to use
					aria-label as well so user knows where he is.
				</p>
				<p>
					You can style the border of the element that is focused by Tab using
					:focus-visible css property.
				</p>
			</section>
		</div>
	);
}
