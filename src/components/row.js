import styled from 'styled-components'
import media from '../utils/media'

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: ${props => (props.center ? `center` : `flex-start`)};
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
`

export default Row
