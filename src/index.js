import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { accordionIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: accordionIcon,

	// Build in Functions
	edit: Edit,

	save: () => null
});