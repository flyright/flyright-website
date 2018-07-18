import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextXXL = styled.div`
	font-family: Fredericka the Great, sans-serif;
	font-size: 42px;
	color: ${dark};
	line-height: 52px;
	letter-spacing: 0.5px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		font-size: 52px;
		line-height: 64px;
	`};
`

export default TextXXL
