'use strict';

/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import KickerEditor from './KickerEditor';
import { appendKickerToTitleDOMElement, connectWithSelect } from './utils';

/**
 * Component to be used as a panel in the Document tab of the Editor.
 *
 * https://developer.wordpress.org/block-editor/developers/slotfills/plugin-document-setting-panel/
 */
const NewspackKickerPanel = ( { kicker, mode } ) => {
	// Update the DOM when kicker value changes or editor mode is switched
	useEffect( () => {
		appendKickerToTitleDOMElement( kicker, mode === 'text' );
	}, [ kicker, mode ] );

	return (
		<PluginDocumentSettingPanel
			name="newspack-kicker"
			title={ __( 'Article Kicker', 'newspack' ) }
			className="newspack-kicker"
		>
			{ __( 'Set a Kicker for the Article', 'newspack' ) }
			<KickerEditor />
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'plugin-document-setting-panel-newspack-kicker', {
	render: connectWithSelect( NewspackKickerPanel ),
	icon: null,
} );
