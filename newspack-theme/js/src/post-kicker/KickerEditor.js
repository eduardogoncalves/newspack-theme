/**
 * WordPress dependencies
 */
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { TextareaControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { connectWithSelect, META_FIELD_NAME } from './utils';

const decorate = compose(
	connectWithSelect,
	withDispatch( dispatch => ( {
		saveKicker: kicker => {
			dispatch( 'core/editor' ).editPost( {
				meta: {
					[ META_FIELD_NAME ]: kicker,
				},
			} );
		},
	} ) )
);

const KickerEditor = ( { kicker, saveKicker } ) => {
	const [ value, setValue ] = useState( kicker );

	useEffect( () => {
		saveKicker( value );
	}, [ value ] );

	return (
		<TextareaControl
			value={ value }
			onChange={ setValue }
			style={ { marginTop: '10px', width: '100%' } }
		/>
	);
};

export default decorate( KickerEditor );
