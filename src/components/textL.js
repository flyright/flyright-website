import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextL = styled.div`
	font-family: Barlow, sans-serif;
	font-weight: 600;
	font-size: ${props => (props.smaller ? `22px` : `25px`)};
	color: ${props => (props.color ? props.color : dark)};
	line-height: 38px;
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		${props => (props.smaller ? `24px` : `28px`)}
		line-height: 42px;
	`};
`

export default TextL
