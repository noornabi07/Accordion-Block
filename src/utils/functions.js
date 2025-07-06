import { prefix } from "./data";

const $ = jQuery;

export const runAccordion = (attributes, id, isBackend = false, custom = {}) => {
	const { layout } = attributes;

	const sl = `#${id} .${prefix}`;

	'vertical' === layout && new $.Zebra_Accordion(sl, {
		animate_opacity: true,
		collapsible: false,
		expanded_class: 'accordionExpanded',
		hide_speed: 400,
		scroll_speed: 600,
		show: isBackend ? custom.activeIndex : 0,
		toggle_on_mouseover: false
	});

	'horizontal' === layout && $(function () {
		$(`${sl} dt`).first().addClass('accordionExpanded');

		// Show First Info
		$(`${sl} dd`).first().show().animate({ flexGrow: 1 });

		// Show Info On Click
		$(`${sl} dt`).click(function () {
			$(this).addClass('accordionExpanded').siblings(`${sl} dt`).removeClass('accordionExpanded');

			$(this).next().show().animate({ flexGrow: 1 }).siblings(`${sl} dd`).animate({ flexGrow: 0 }, function () {
				$(this).hide();
			});
		});
	});
}