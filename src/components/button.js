import styled from 'styled-components'
import media from '../utils/media'
import { dark, white } from '../utils/colors'

const Button = styled.div`
	display: block;
	font-size: ${props => (props.article ? `0.75em` : `0.9em`)};
	font-weight: bold;
	letter-spacing: 1px;
	color: ${dark};
	text-transform: uppercase;
	text-decoration: none;
	text-align: center;
	padding: ${props => (props.article ? `0.6em 1.2em` : `0.75em 1.5em`)};
	background-color: ${white};
	cursor: pointer;
	margin: ${props => (props.article ? `1em 1em 1em 0` : `1em 0.5em`)};
	border-radius: 100px;
	line-height: 20px;
	box-shadow: 0 1px 3px rgba(2, 8, 54, 0), 0 1px 7px rgba(2, 8, 54, 0.1);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 14px 28px rgba(2, 8, 54, 0.1), 0 10px 10px rgba(2, 8, 54, 0.1);
	}
`

export default Button
