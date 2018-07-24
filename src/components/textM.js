import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextM = styled.div`
	font-family: Barlow, sans-serif;
	font-size: 18px;
	line-height: 28px;
	color: ${props => (props.color ? props.color : dark)};
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `0.5em 0`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.desk`
		font-size: 19px;
		line-height: 31px;
	`};
`

export default TextM
