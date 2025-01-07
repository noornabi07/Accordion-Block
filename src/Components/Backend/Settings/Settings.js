import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { Button, ButtonGroup, PanelBody, PanelRow, TabPanel, Tooltip, SelectControl, ToggleControl, __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Settings Components
import { ColorsControl, HelpPanel, Label, Typography, ColorControl } from '../../../../../bpl-tools/Components';

import { BsPlus, horizontalLineIcon, verticalLineIcon } from '../../../utils/icons';
import { generalStyleTabs } from '../../../utils/options';
import ItemSettings from './ItemSettings';
import { ItemsPanel } from '../../../../../bpl-tools/Components';
import { produce } from 'immer';
import { AiFillCaretRight, AiFillCheckCircle, AiOutlineCheckCircle, BsEyeFill, FiArrowRightCircle, IoIosArrowForward } from '../../../utils/iconsTypes';

const Settings = ({ attributes, setAttributes, setActiveIndex }) => {
	const { accordions, layout, textAlign, titleTypo, titleColors, titleActiveColors, titleBorder = {}, contentTypo, contentColors, accordionIcon } = attributes;
	const { iconColor } = accordionIcon;

	const itemsProps = { attributes, setAttributes, arrKey: 'accordions', setActiveIndex }

	const handleSelectIcon = (upValue, downVale) => {
		const newIcon = produce(accordionIcon, draft => {
			draft.upIcon = upValue;
			draft.downIcon = downVale;
		})
		setAttributes({ accordionIcon: newIcon });
	};

	return <>
		<InspectorControls>
			<div className='babInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
				{'general' === tab.name && <>
					<HelpPanel slug='b-accordion' />

					<PanelBody className='bPlPanelBody' title={__('Accordions', 'b-blocks')}>
						<ItemsPanel {...itemsProps} newItem={{
							title: `Accordion ${accordions.length + 1}`,
							content: 'Lorem ipsum dolor sit amet consectetuer facilisis lacinia sapien ac et. Quis hendrerit neque congue pretium iaculis justo laoreet orci elit condimentum. Eros natoque Curabitur accumsan eget quis porttitor Sed Vestibulum amet sed.'
						}} ItemSettings={ItemSettings} itemLabel='Accordion' design='all' />
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Accordion Settings', 'accordion')} initialOpen={false}>
						<PanelRow>
							<Label className='mb5'>{__('Layout:', 'cards-block')}</Label>
							<ButtonGroup className='bPlBtnGroup'>
								<Tooltip text={__('Vertical', 'cards-block')} placement='top' position='top'>
									<Button icon={verticalLineIcon} isMedium isPrimary={'vertical' === layout} aria-pressed={'vertical' === layout} onClick={() => setAttributes({
										layout: 'vertical'
									})}></Button>
								</Tooltip>

								<Tooltip text={__('Horizontal', 'cards-block')} placement='top' position='top'>
									<Button icon={horizontalLineIcon} isMedium isPrimary={'horizontal' === layout} aria-pressed={'horizontal' === layout} onClick={() => setAttributes({
										layout: 'horizontal'
									})}></Button>
								</Tooltip>
							</ButtonGroup>
						</PanelRow>



						<ToggleControl
							className='mt10'
							label={__("Set accordion icon:", "b-accordion")}
							checked={accordionIcon?.isIcon}
							onChange={(val) => setAttributes({ accordionIcon: { ...accordionIcon, isIcon: val } })}
						/>


						{/* Icon alignment select option */}
						{
							accordionIcon?.isIcon && <>
								<SelectControl
									className='mt10'
									label={__("Select your icon position:", "b-accordion")}
									value={accordionIcon.iconPosition} // This sets the initial value
									options={[
										{ label: 'Right Side', value: 'right' },
										{ label: 'Left Side', value: 'left' },
									]}
									onChange={(val) => setAttributes({ accordionIcon: { ...accordionIcon, iconPosition: val } })}
								/>

								<div className="selectIconBtn" style={{ marginTop: "15px" }}>
									<h3 style={{ display: "flex", alignItems: "center", gap: "3px", marginBottom: "0px" }}>
										<p style={{ marginTop: "14px", fontSize: "13px" }}>Recommend Icons:</p>
										<AiFillCheckCircle style={{ fontSize: "12px", color: "#1C1678" }} />
									</h3>
									<button onClick={() => handleSelectIcon('First', 'Second')}>
										<IoIosArrowForward color="#121481" width="24" height="24" />
									</button>
									<button onClick={() => handleSelectIcon('Third', 'Four')}>
										<BsPlus color="#121481" width="24" height="24" />
									</button>
									<button onClick={() => handleSelectIcon('Five', 'Six')}>
										<FiArrowRightCircle color="#121481" width="24" height="24" />
									</button>
									<button onClick={() => handleSelectIcon('Seven', 'Eight')}>
										<AiFillCaretRight color="#121481" width="24" height="24" />
									</button>
									<button onClick={() => handleSelectIcon('Nine', 'Ten')}>
										<BsEyeFill color="#121481" width="24" height="24" />
									</button>
									<button onClick={() => handleSelectIcon('Eleven', 'Twelve')}>
										<AiOutlineCheckCircle color="#121481" width="24" height="24" />
									</button>
								</div>
							</>
						}



					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Title', 'accordion')}>
						<Typography value={titleTypo} onChange={val => setAttributes({ titleTypo: val })} defaults={{ fontSize: { desktop: 16, tablet: 16, mobile: 16 }, fontWeight: 700 }} />

						<ColorsControl value={titleColors} onChange={val => setAttributes({ titleColors: val })} defaults={{ color: '#fff', bg: '#4527a4' }} />

						<ColorsControl label={__('Active Colors:', 'accordion')} value={titleActiveColors} onChange={val => setAttributes({ titleActiveColors: val })} defaults={{ color: '#fff', bg: '#8344c5' }} />

						<ColorControl label={__('icon color', 'accordion')} value={iconColor} onChange={(val) => {
							const newColor = produce(accordionIcon, draft => {
								draft.iconColor = val
							})
							setAttributes({ accordionIcon: newColor })
						}} defaultColor='#fff' />


						<BorderBoxControl className='mt20' label={__('Border')} value={titleBorder?.normal} onChange={val => setAttributes({ titleBorder: { ...titleBorder, normal: val } })} />

						<BorderBoxControl className='mt20 mb10' label={__('Active Border')} value={titleBorder?.active} onChange={val => setAttributes({ titleBorder: { ...titleBorder, active: val } })} />

						<span>{__('On horizontal layout the border will work different. All side will work for opposite.', 'accordion')}</span>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Content', 'accordion')} initialOpen={false}>
						<Typography value={contentTypo} onChange={val => setAttributes({ contentTypo: val })} defaults={{ fontSize: { desktop: 15, tablet: 15, mobile: 15 } }} />

						<ColorsControl value={contentColors} onChange={val => setAttributes({ contentColors: val })} defaults={{ color: '#333', bg: '#ecf0f1' }} />
					</PanelBody>
				</>}
			</>}</TabPanel>
		</InspectorControls>


		<BlockControls>
			<AlignmentToolbar value={textAlign} onChange={val => setAttributes({ textAlign: val })} />
		</BlockControls>
	</>;
};
export default Settings;