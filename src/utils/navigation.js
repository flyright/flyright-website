// Data structure used to build navigation headers

const navigation = {
	company: [
		{ text: 'About', slug: '/about', isExternal: false },
		{ text: 'Blog', slug: '/blog', isExternal: false },
		{ text: 'Roadmap', slug: '/roadmap', isExternal: false },
		{ text: 'Press Kit', slug: '/press-kit', isExternal: false },
	],
	platform: [
		{ text: 'Android', slug: '/a', isExternal: true },
		{
			text: 'iOS',
			slug: 'https://itunes.apple.com/us/app/flyright/id1296706648?ls=1&mt=8',
			isExternal: true,
		},
		{ text: 'Web', slug: '/web', isExternal: true },
		{ text: 'API', slug: '/api', isExternal: false },
	],
	support: [
		{ text: 'FAQ', slug: '/faq', isExternal: false },
		{ text: 'Contact', slug: '/contact', isExternal: false },
		{
			text: 'Twitter',
			slug: 'https://twitter.com/flyrightco',
			isExternal: true,
		},
	],
	legal: [
		{ text: 'Terms of Service', slug: '/terms-of-service', isExternal: false },
		{ text: 'Privacy Policy', slug: '/privacy-policy', isExternal: false },
	],
}

export default navigation
