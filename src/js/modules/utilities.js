/**
 * Create copyright text with a dynamic date and URL campaign builder for GA inside a div with the ID of 'copyright.'
 * @param {string} brandName Name of the brand
 * @param {string} builder Name of the person/org building the site
 * @param {string} site Home URL of the builder. HTTP is added automatically.
 */
export function myCopyright(brandName, builder, site) {
	const copyright = document.getElementById('copyright');
	const thisYear = new Date().getFullYear();
	const brand = brandName.replace(/ /g, '');
	const builderLink = `<a href="https://${site}?utm_source=${brand}&utm_medium=website_footer&utm_campaign=copyright" target ="_blank">${builder}</a>`;
	copyright.insertAdjacentHTML(
		'afterbegin',
		`<p>&copy; ${thisYear} ${brandName} All Rights Reserved.<br/>Site built by ${builderLink}</p>`,
	);
}

/** Shorthand for Query Selector Function.
 * @param selector {string} CSS Selector. Must include class ('.') marker if needed
 * @param  [all] {boolean} optional to call querySelectorAll.
 * @return {Element} HTML Element
 * */
export function querySelector(selector, all = false) {
	return all === false
		? document.querySelector(selector)
		: document.querySelectorAll(selector);
}
