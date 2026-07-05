export function ViewA11yMotion() {
	return (
		<div>
			<h1>Motion A11y</h1>
			<section>
				<h2>Prefers Reduced Motion</h2>
				<p>
					@media (prefers-reduced-motion) is a CSS media feature used for
					accessibility, allowing you to detect whether a user has requested
					reduced animations.
				</p>
				<pre>
					{JSON.stringify(
						"@media (prefers-reduced-motion: reduce) {}",
						null,
						2,
					)}
				</pre>
				<p>
					<b>no-preference</b> - User has not indicated any preference. Safe to
					use normal animations.
				</p>
				<p>
					<b>reduce</b> - User prefers less motion (accessibility setting
					enabled in OS/browser). You should remove or significantly simplify
					animations.
				</p>
			</section>
		</div>
	);
}
