import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextXL = styled.div`
	font-family: Fredericka the Great, sans-serif;
	font-size: 38px;
	color: ${dark};
	line-height: 48px;
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		font-size: 42px;
		line-height: 56px;
	`};
`

export default TextXL
