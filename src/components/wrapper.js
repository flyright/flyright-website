import styled from 'styled-components'
import media from '../utils/media'

const Wrapper = styled.div`
	padding: ${props => (props.padding ? props.padding : `2em 0`)};
	margin: 0 auto;

	${media.tab`
		max-width: ${props => (props.content ? `none` : `680px`)};
	`};
	${media.desk`
		max-width: ${props => (props.content ? `none` : `900px`)};
	`};
`

export default Wrapper
