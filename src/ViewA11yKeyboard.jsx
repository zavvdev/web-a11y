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
			<section>
				<h2>Autocomplete</h2>
				<p>
					Controls whether and how the browser should suggest previously entered
					or stored values (like email, address, passwords, etc.). Common
					values: email, name, given-name, family-name, username.
				</p>
				<input name="email" autocomplete="email" />
			</section>
			<section>
				<h2>Inert Content</h2>
				<p>
					When you have some html elements that are focusable but not
					immediately visible (like modals), they can still capture focus when
					user uses Tab which can lead to confusion because focus is literally
					not visible. We can use "inert=boolean" property in order to make
					screen readers ignore it while it's closed. You can also set inert for
					the background when modal is open so it's not focusable.
				</p>
				<div>
					<button type="button">Save</button>
				</div>
				<div inert role="dialog">
					<p>Inert modal content</p>
					<button type="button">Close</button>
				</div>
			</section>
		</div>
	);
}
