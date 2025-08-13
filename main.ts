/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?utm_campaign=devrel_gwh_hackathon&utm_source=mlh&utm_medium=referral&utm_term=challenges&utm_content=Open+the+CKEditor+Builder+to+start+customizing+your+editor.#installation/NodgNARATAdCMEYKQCxQKwGZ1QJzoA4A2dBBETFI3ABiihVLU10xBCJpsIeQgFMAdshphgCMBKmTJAXUiYaIFADMcEWUA===
 */


import {
	ClassicEditor,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockToolbar,
	Bold,
	Emoji,
	Essentials,
	Italic,
	Link,
	Mention,
	Paragraph
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

import './style.css';

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTYxNjYzOTksImp0aSI6IjEyNTc1OGQwLTVmNGItNDViYi1iODAwLTYyNTQ3ZTNlZTExYiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjBiMTA2OTVlIn0.Wc4BpJ233q_0NiGNDCsaMeTYdrg2wkHfJTY6Iy3sjb_8uKnVSdipvTYrF3vBq0WSh9mFBpRuL-MbwjnIUvXucA';

const editorConfig = {
	toolbar: {
		items: ['undo', 'redo', '|', 'bold', 'italic', '|', 'link'],
		shouldNotGroupWhenFull: false
	},
	plugins: [AutoLink, Autosave, BalloonToolbar, BlockToolbar, Bold, Essentials, Italic, Link, Mention, Paragraph],
	balloonToolbar: ['bold', 'italic', '|', 'link'],
	blockToolbar: ['bold', 'italic', '|', 'link'],
	initialData:
		`<h2><strong>Project Structure & Functionality</strong></h2>
		<p>
			This project uses <strong>CKEditor 5</strong> with a custom configuration. The main file is <strong>main.ts</strong>, which imports the editor, plugins, and styles.
		</p>
		<h3><strong>Key Files:</strong></h3>
		<ul>
			<li><strong>main.ts</strong>: Initializes and configures the editor.</li>
			<li><strong>style.css</strong>: Custom styles for the editor UI.</li>
			<li><strong>ckeditor5/ckeditor5.css</strong>: CKEditor 5 core styles.</li>
		</ul>
		<h3><strong>Functionality:</strong></h3>
		<ul>
			<li>Rich text editing with support for <strong>bold</strong>, <em>italic</em>, and <a href="https://ckeditor.com/docs/ckeditor5/latest/features/link.html">links</a>.</li>
			<li>Autosave, balloon and block toolbars, and external link handling.</li>
			<li>Customizable toolbar and placeholder text.</li>
			<li>License key integration for premium features.</li>
		</ul>
		<p>
			Modify <strong>editorConfig</strong> in <strong>main.ts</strong> to add or remove plugins and adjust the editor's behavior to fit your needs.
		</p>`,
	licenseKey: LICENSE_KEY,
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: "manual" as const,
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	mention: {
		feeds: [
			{
				marker: '@',
				feed: [
					/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
				]
			}
		]
	},
	menuBar: {
		isVisible: true
	},
	placeholder: 'Type or paste your content here!'
};

const editorElement = document.querySelector('#editor');
if (editorElement) {
	ClassicEditor.create(editorElement as HTMLElement, editorConfig);
} else {
	console.error('Editor element not found');
}
