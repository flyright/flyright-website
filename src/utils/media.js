import { css } from 'styled-components'

// Media query template for styled-components
// For usage see the docs:
// https://www.styled-components.com/docs/advanced#media-templates

const sizes = {
	// default styles written mobile-first assuming 320px width
	mbl: 400,
	tab: 700,
	desk: 990,
	deskL: 1200,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}em) {
			${css(...args)};
		}
	`

	return acc
}, {})

export default media
