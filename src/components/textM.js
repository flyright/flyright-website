import styled from 'styled-components'
import { dark } from '../utils/colors'
import media from '../utils/media'
import { smoke } from '../utils/colors'

const TextM = styled.div`
	font-family: Barlow, sans-serif;
	font-weight: ${props => (props.medium ? `500` : `400`)};
	font-size: ${props => (props.smaller ? `17px` : `19px`)};
	line-height: 31px;
	color: ${props => (props.color ? props.color : dark)};
	letter-spacing: 0.2px;
	padding: ${props => (props.padding ? props.padding : `0.5em 0`)};
	margin: ${props => (props.margin ? props.margin : `none`)};
	text-align: ${props => (props.center ? `center` : `left`)};
	border-bottom: ${props => (props.headerMbl ? `1px solid ${smoke}` : `none`)};

	${media.tab`
		font-size: ${props => (props.smaller ? `18px` : `20px`)};
		line-height: ${props => (props.smaller ? `28px` : `33px`)};
	`};
	${media.desk`
		line-height: ${props => (props.smaller ? `28px` : `34px`)};
	`};

	&:hover {
		background-color: ${props => (props.headerDesk ? smoke : `initial`)};
	}
`

export default TextM
