export function ViewA11yVisuallyImpaired() {
	return (
		<div>
			<h1>Visually Impaired A11y</h1>
			<p>
				Click Ctrl/Command + Shift + P in your Chrome devtools and search for
				"Show Accessibility". Enable it and you'll be able to toggle
				accessibility tree for the page. Then you can click on an individual
				html element and you can see in Accessibility pane which Aria attributes
				and computed properties this element has.
			</p>
			<p>
				For example, if you create an input, open Accessibility pane and then
				Computed Properties, you can see the Name section. This section shows
				you a set of attributes that define a name for input. This set is
				ordered by priority, so aria-labelledby has a highest priority, then
				aria-label and so on.
			</p>
			<img alt="a11y-pane" src="/a11y-pane.png" width="500px" />
			<section>
				<h2>Input Label</h2>
				<p>
					Provide a label for input in order to create a relation between them
					for screen readers.
				</p>
				<form>
					<label htmlFor="name">Name</label>
					<input id="name" name="name" placeholder="Enter your name" />
				</form>
			</section>
			<section>
				<h2>Input Aria-Label</h2>
				<p>Provide an aria-label for input if label cannot be used.</p>
				<form>
					<input name="name" aria-label="Name" placeholder="Enter your name" />
				</form>
			</section>
			<section>
				<h2>Input Aria-Labelledby</h2>
				<p>
					Provide an aria-labelledby for input if you have other html element
					with content that can be used as a label for the input.
				</p>
				<form>
					<div id="lbname">Name</div>
					<input
						name="name"
						aria-labelledby="lbname"
						placeholder="Enter your name"
					/>
				</form>
			</section>
			<section>
				<h2>Aria-Live Attribute</h2>
				<p>
					Imagine that you have a toast message container which contains a
					message like "Updated successfully" when user updates his profile for
					example. For visually impaired people it would be hard to understand
					what happens when they update their profile.
				</p>
				<p>
					The aria-live attribute tells screen readers how urgently they should
					announce changes to an element’s content without requiring the user to
					move focus.
				</p>
				<p>
					<b>"off"</b> - Changes are generally not announced automatically
					(unless the user is currently focused on the region).
				</p>
				<p>
					<b>"polite"</b> - Screen reader waits until the user is idle before
					announcing the update.
				</p>
				<p>
					<b>"assertive"</b> - Interrupts the current speech and announces the
					update immediately. (Errors, security warnings, session expiration,
					critical alerts.)
				</p>
				<div aria-live="off" />
				<div aria-live="assertive" />
				<div aria-live="polite" />
			</section>
			<section>
				<h2>Contrast Ratio</h2>
				<p>
					You can open color picker in devtools and see if a specific color
					complies with accessibility standard for colorblind users. AA and AAA
					are saying whether this color can cause problems for colorblind users.
				</p>
				<img alt="contrast-ratio" width="500" src="/contr-ratio.png" />
				<p>
					You can also emulate vision deficiencies by using Ctrl/Command + Shift
					+ P, then Show Rendering. Rendering page will be available so you can
					see next option:
				</p>
				<img alt="vision-emulator" width="500" src="/vision-emulator.png" />
				<p>
					So this is important to have different hierarchies of emphasising
					things because, for example, users might not see red or green colors
					that you use for error/success messages.
				</p>
			</section>
			<section>
				<h2>Event Handlers</h2>
				<p>
					Do not add onClick listeners on non-interactive elements like divs.
					Always use button tag.
				</p>
			</section>
			<section>
				<h2>Aria Atomic & Aria Relevant</h2>
				<p>
					Both aria-atomic and aria-relevant control how ARIA live regions
					announce updates to screen readers. They only matter when used
					together with aria-live.
				</p>
				<p>
					<b>aria-atomic</b> - Controls whether the entire live region is
					announced when something changes. "true" - Announce the whole region
					every time anything changes, "false" - Announce only the changed part
					(default).
				</p>
				<p>
					<b>aria-relevant</b> - Controls which types of DOM changes trigger
					announcements. "additions" - New nodes added, "removals" - Nodes
					removed, "text" - Text content changes, "all" - everything from above.
					Default is "additions text"
				</p>
			</section>
		</div>
	);
}
