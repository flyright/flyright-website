import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextS = styled.div`
	font-family: Barlow, sans-serif;
	font-size: 16px;
	color: ${props => (props.color ? props.color : dark)};
	line-height: 28px;
	letter-spacing: 0.5px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `none`)};
	text-align: ${props => (props.center ? `center` : `left`)};
`

export default TextS
