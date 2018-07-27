import styled from 'styled-components'
import media from '../utils/media'

const SectionBlock = styled.div`
	width: 100%;
	height: 100%;
	max-width: ${props => (props.text ? `300px` : `none`)};
	margin: ${props => (props.text ? `0 auto` : `initial`)};
	& div {
		text-align: ${props => (props.text ? `center` : `initial`)};
	}

	${media.tab`
		display: ${props => (props.text ? `flex` : `block`)};
		flex-direction: ${props => (props.text ? `column` : `initial`)};
		justify-content: ${props => (props.text ? `center` : `initial`)};
		width: 50%;
		height: 50%;
		padding: ${props => (props.text ? `1em` : `none`)};
		margin: ${props => (props.text ? `initial` : `initial`)};
		& div {
			text-align: ${props => {
				switch (props.layout) {
					case `Left`:
						return `right`
						break
					case `Right`:
						return `left`
						break
					default:
						return `left`
				}
			}};
		}
	`};
	${media.desk`
		max-width: ${props => (props.text ? `375px` : `none`)};
	`};
`

export default SectionBlock
