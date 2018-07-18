import styled from 'styled-components'
import media from '../utils/media'

const Content = styled.div`
	margin: 0 auto;
	max-width: ${props => (props.img ? `none` : `330px`)};
	padding: ${props => (props.img ? `none` : `0 2em`)} ${media.tab`
		max-width: 600px;
	`};
`

export default Content
