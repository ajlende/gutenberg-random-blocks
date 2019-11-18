import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';

import { randomItem } from './random-utils';

const maze = ( w, h ) => Array.from( { length: h }, () =>
	Array.from( { length: w }, () =>
		randomItem( '╱╲' )
	).join( '' )
).join( '\n' );

const RandomText = ( { attributes, setAttributes, className } ) => {
	const genText = () => setAttributes( { text: maze( 25, 15 ) } );
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Options' ) }>
					<Button className="button" onClick={ genText }>
						{ __( 'Randomize' ) }
					</Button>
				</PanelBody>
			</InspectorControls>
			<pre className={ className }>{ attributes.text }</pre>
		</>
	);
};

RandomText.Content = ( { attributes } ) => <pre>{ attributes.text }</pre>;

RandomText.attributes = {
	text: {
		type: 'string',
		source: 'text',
		selector: 'pre',
	},
};

export default RandomText;
