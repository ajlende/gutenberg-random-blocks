
import { renderToStaticMarkup } from 'react-dom/server';
import classNames from 'classnames';

import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { randomInt } from './random-utils';

const Sunburst = ( ) => (
	<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		{ Array.from( { length: 500 }, ( x, i ) => (
			<line
				key={ i }
				x1="50"
				y1="50"
				x2={ randomInt( 0, 100 ) }
				y2={ randomInt( 0, 100 ) }
				stroke={ `hsl(${ randomInt( 0, 60 ) }, 90%, ${ randomInt( 50, 100 ) }%` }
			/>
		) ) }
	</svg>
);

const RandomSVG = ( { attributes, setAttributes, className } ) => {
	const genSVG = () => setAttributes( { svg: renderToStaticMarkup( <Sunburst /> ) } );
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Options' ) }>
					<Button className="button" onClick={ genSVG }>
						{ __( 'Randomize' ) }
					</Button>
				</PanelBody>
			</InspectorControls>
			<RawHTML className={ classNames( 'svg-container', className ) }>
				{ attributes.svg }
			</RawHTML>
		</>
	);
};

RandomSVG.Content = ( { attributes } ) => (
	<RawHTML className="svg-container">
		{ attributes.svg }
	</RawHTML>
);

RandomSVG.attributes = {
	svg: {
		type: 'string',
		source: 'html',
		selector: '.svg-container',
	},
};

export default RandomSVG;
