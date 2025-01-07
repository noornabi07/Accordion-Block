import { renderToString } from '@wordpress/element';
import { useEffect, useRef, useState } from 'react';

import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import Accordions from '../Common/Accordions';
import Style from '../Common/Style';
import { runAccordion } from '../../utils/functions';
import { prefix } from '../../utils/data';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const { accordions, layout, accordionIcon } = attributes;

	const babAccordion = useRef(null);

	const [activeIndex, setActiveIndex] = useState(0);

	const id = `${prefix}-${clientId}`;

	useEffect(() => {
		babAccordion.current.innerHTML = '';
		babAccordion.current.innerHTML = renderToString(<Accordions accordions={accordions} accordionIcon={accordionIcon} />);

		runAccordion(attributes, id, true, { activeIndex });
	}, [accordions, layout, accordionIcon?.isIcon, accordionIcon?.upIcon, accordionIcon?.downIcon, accordionIcon?.iconColor]);

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} setActiveIndex={setActiveIndex} />

		<div {...useBlockProps()} id={id}>
			<Style attributes={attributes} id={id} />

			<dl className={`${prefix} ${layout || 'horizontal'}`} ref={babAccordion}></dl>
		</div>
	</>;
};
export default Edit;