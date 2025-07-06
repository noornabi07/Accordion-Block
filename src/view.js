import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import './style.scss';
import Accordions from './Components/Common/Accordions';
import Style from './Components/Common/Style';
import { runAccordion } from './utils/functions';
import { prefix } from './utils/data';

// Accordion
document.addEventListener('DOMContentLoaded', () => {
	const allAccordion = document.querySelectorAll('.wp-block-bab-accordion');
	allAccordion.forEach(accordion => {
		const attributes = JSON.parse(accordion.dataset.attributes);

		createRoot(accordion).render(<>
			<Style attributes={attributes} id={accordion.id} />

			<RenderAccordion attributes={attributes} id={accordion.id} />
		</>);

		accordion?.removeAttribute('data-attributes');
	});
});

const RenderAccordion = ({ attributes, id }) => {
	const { accordions, layout } = attributes;

	useEffect(() => {
		runAccordion(attributes, id);
	}, []);

	return <dl className={`${prefix} ${layout || 'horizontal'}`}>
		<Accordions accordions={accordions} accordionIcon={attributes.accordionIcon} />
	</dl>
}