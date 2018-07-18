import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextL = styled.div`
	font-family: Fredericka the Great, sans-serif;
	font-size: 32px;
	color: ${dark};
	line-height: 42px;
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		font-size: 36px;
		line-height: 48px;
	`};
`

export default TextL
