import { registerBlockType } from '@wordpress/blocks';

import RandomText from './random-text';
import RandomSVG from './random-svg';
import RandomCSS from './random-css';

registerBlockType( 'a8c/random-text', {
	title: 'Random Text',
	icon: 'randomize',
	category: 'widgets',
	edit: RandomText,
	save: RandomText.Content,
	attributes: RandomText.attributes,
} );

registerBlockType( 'a8c/random-svg', {
	title: 'Random SVG',
	icon: 'randomize',
	category: 'widgets',
	edit: RandomSVG,
	save: RandomSVG.Content,
	attributes: RandomSVG.attributes,
} );

registerBlockType( 'a8c/random-css', {
	title: 'Random CSS',
	icon: 'randomize',
	category: 'widgets',
	edit: RandomCSS,
	save: RandomCSS.Content,
	attributes: RandomCSS.attributes,
} );
