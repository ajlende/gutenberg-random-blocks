import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';

import { randomInt, randomItem } from './random-utils';

const camouflage = ( w, h ) => {
	return {
		background: 'transparent',
		width: `10px`,
		height: `10px`,
		boxShadow: Array.from( { length: 1500 }, () =>
			`${ randomInt( 0, w - 10 ) }px ${ randomInt( 0, h - 10 ) }px ${ randomItem( [ '#896D5D', '#506356', '#32303F' ] ) }`
		).join( ', ' ),
	};
};

const RandomCSS = ( { attributes, setAttributes, className } ) => {
	const genCSS = () => setAttributes( { style: camouflage( 250, 250 ) } );
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Options' ) }>
					<Button className="button" onClick={ genCSS }>
						{ __( 'Randomize' ) }
					</Button>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				<div style={ attributes.style } />
			</div>
		</>
	);
};

RandomCSS.Content = ( { attributes } ) => (
	<div>
		<div style={ attributes.style } />
	</div>
);

RandomCSS.attributes = {
	style: {
		type: 'object',
	},
};

export default RandomCSS;
