// Data structure used to build navigation headers

const navigation = {
	company: [
		{ text: 'About', slug: 'about', isExternal: false },
		{ text: 'Blog', slug: 'blog', isExternal: false },
		{ text: 'Roadmap', roadmap: 'roadmap', isExternal: false },
	],
	platform: [
		{ text: 'Android', slug: '', isExternal: true },
		{ text: 'iOS', slug: 'ios', isExternal: true },
		{ text: 'Web', slug: 'web', isExternal: true },
		{ text: 'API', slug: 'api', isExternal: false },
	],
	support: [
		{ text: 'FAQ', slug: 'faq', isExternal: false },
		{ text: 'Twitter', slug: '', isExternal: true },
	],
	legal: [
		{ text: 'Terms of Service', slug: '', isExternal: false },
		{ text: 'Privacy Policy', slug: '', isExternal: false },
	],
}

export default navigation
