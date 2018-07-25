import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextXL = styled.div`
	font-family: Barlow, sans-serif;
	font-weight: 600;
	font-size: 38px;
	color: ${props => (props.color ? props.color : dark)};
	line-height: 56px;
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		font-size: 42px;
		line-height: 60px;
	`};
`

export default TextXL
