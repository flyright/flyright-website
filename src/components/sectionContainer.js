import styled from 'styled-components'
import media from '../utils/media'

const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
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
	`};

	${media.desk`
		max-width: 1000px;
		margin: 0 auto;
	`};
`

export default SectionContainer
