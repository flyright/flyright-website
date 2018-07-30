import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'

const TextXXL = styled.div`
	font-family: Barlow, sans-serif;
	font-weight: 600;
	font-size: 44px;
	color: ${props => (props.color ? props.color : dark)};
	line-height: 58px;
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `auto`)};
	text-align: ${props => (props.center ? `center` : `left`)};
	margin: ${props => (props.margin ? props.margin : `none`)};

	${media.tab`
		font-size: 50px;
		line-height: 68px;
	`};
`

export default TextXXL
