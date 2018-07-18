import styled from 'styled-components'
import { dark, red } from '../utils/colors'

const LinkExternal = styled.a`
	color: ${dark};
	background-color: none;
	border: none;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	box-shadow: none;
	border-bottom: ${props => (props.borderless ? `none` : `3px solid ${red}`)};
	padding: 0 0 0.25em 0;
	margin: 0;
`

export default LinkExternal
