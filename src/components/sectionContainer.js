import styled from 'styled-components'
import media from '../utils/media'

const SectionContainer = styled.div`
	display: flex;
	flex-direction: ${props => (props.landing ? `column-reverse` : `column`)};
	align-items: center;

	${media.tab`
		flex-direction: ${props => {
			switch (props.layout) {
				case `Left`:
					return `row-reverse`
					break
				case `Right`:
					return `row`
					break
				default:
					return `row`
			}
		}};
		justify-content: center;
		padding: 1em;
		margin: ${props => (props.landing ? `3em 1em 0 3em` : `0 auto`)};
	`};

	${media.desk`
		max-width: ${props => (props.landing ? `1200px` : `1000px`)};
		margin: 0 auto;
	`};
`

export default SectionContainer
