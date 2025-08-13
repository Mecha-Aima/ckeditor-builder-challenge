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
		items: ['undo', 'redo', '|', 'bold', 'italic', '|', 'emoji', 'link'],
		shouldNotGroupWhenFull: false
	},
	plugins: [AutoLink, Autosave, BalloonToolbar, BlockToolbar, Bold, Emoji, Essentials, Italic, Link, Mention, Paragraph],
	balloonToolbar: ['bold', 'italic', '|', 'link'],
	blockToolbar: ['bold', 'italic', '|', 'link'],
	initialData:
		'<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
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
