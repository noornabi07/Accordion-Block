import { getColorsCSS, getBorderBoxCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { textAlign, titleTypo, titleColors, accordionIcon, titleActiveColors, titleBorder = {}, contentTypo, contentColors } = attributes;
	const { normal: nBorder, active: aBorder } = titleBorder;

	const accordionSl = `#${id} .babAccordion`;
	const titleSl = `#${id} .babAccordion dt`;

	return (
		<style
			dangerouslySetInnerHTML={{
				__html: `
				${getTypoCSS('', titleTypo)?.googleFontLink}
				${getTypoCSS('', contentTypo)?.googleFontLink}
				${getTypoCSS(`${accordionSl} dt`, titleTypo)?.styles}
				${getTypoCSS(`${accordionSl} dd`, contentTypo)?.styles}

				${accordionSl} dt,
				${accordionSl} dd {
					text-align: ${textAlign};
				}

				${titleSl} {
					${getColorsCSS(titleColors)}
					display: flex;
					align-items: center;
					flex-direction: ${accordionIcon.iconPosition === 'left' ? 'row-reverse' : 'row'};
    				justify-content: ${accordionIcon.iconPosition === 'left' ? 'start' : 'space-between'};
					padding: 10px;
					background-color: ${titleColors.backgroundColor};
					${getBorderBoxCSS(nBorder)}
				}

				${titleSl}.accordionExpanded {
					${getColorsCSS(titleActiveColors)}
					${getBorderBoxCSS(aBorder)}
				}

				${titleSl}.accordionExpanded .icon {
					color: ${titleActiveColors.textColor};
				}

				${accordionSl} dd {
					${getColorsCSS(contentColors)}
				}
				`.replace(/\s+/g, ' '),
			}}
		/>
	);
};
export default Style;
