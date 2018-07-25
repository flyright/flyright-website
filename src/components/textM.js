import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextM = styled.div`
	font-family: Barlow, sans-serif;
	font-size: ${props => (props.smaller ? `17px` : `19px`)};
	line-height: 31px;
	color: ${props => (props.color ? props.color : dark)};
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `0.5em 0`)};
	text-align: ${props => (props.center ? `center` : `left`)};
	${media.tab`
		font-size: ${props => (props.smaller ? `18px` : `20px`)};
		line-height: 33px;
	`};
	${media.desk`
		line-height: 34px;
	`};
`

export default TextM
