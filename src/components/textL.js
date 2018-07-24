import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextL = styled.div`
	font-family: Barlow, sans-serif;
	font-weight: 500;
	font-size: 28px;
	color: ${props => (props.color ? props.color : dark)};
	line-height: 40px;
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		font-size: 30px;
		line-height: 44px;
	`};
`

export default TextL
