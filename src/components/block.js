import styled from 'styled-components'
import media from '../utils/media'

const Block = styled.div`
	width: ${props => (props.width ? props.width : `auto`)};
	height: ${props => (props.height ? props.height : `auto`)};
	padding: ${props => (props.padding ? props.padding : `auto`)};
`

export default Block
