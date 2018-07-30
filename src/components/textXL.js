import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextXXL = styled.div`
	font-family: Barlow, sans-serif;
	font-weight: 600;
	font-size: 32px;
	color: ${props => (props.color ? props.color : dark)};
	line-height: 46px;
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `none`)};
	text-align: ${props => (props.center ? `center` : `left`)};

	${media.tab`
		font-size: 36px;
		line-height: 54px;
	`};
`

export default TextXXL
