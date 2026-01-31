/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';

const KICKER_ID = 'newspack-post-kicker-element';
export const META_FIELD_NAME = 'newspack_post_kicker';

/**
 * Appends kicker to DOM, below the Title in the Editor.
 *
 * @param {string} kicker Kicker text
 */
export const appendKickerToTitleDOMElement = ( kicker, isInCodeEditor ) => {
	let titleEl = document.querySelector( '.editor-post-title__block' ); // Legacy selector
	if ( ! titleEl ) {
		titleEl = document.querySelector( '.edit-post-visual-editor__post-title-wrapper' );
	}

	if ( titleEl && typeof kicker === 'string' ) {
		let kickerEl = document.getElementById( KICKER_ID );
		if ( ! kickerEl ) {
			kickerEl = document.createElement( 'div' );
			kickerEl.id = KICKER_ID;
			// special style for the code (raw text) editor
			if ( isInCodeEditor ) {
				kickerEl.style.paddingLeft = '14px';
				kickerEl.style.marginBottom = '4px';
			}
			titleEl.insertBefore( kickerEl, titleEl.firstChild );
		}
		kickerEl.textContent = kicker;
	}
};

export const connectWithSelect = withSelect( select => ( {
	kicker: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ META_FIELD_NAME ],
	mode: select( 'core/edit-post' ).getEditorMode(),
} ) );
