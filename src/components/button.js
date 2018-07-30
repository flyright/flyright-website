import styled from 'styled-components'
import media from '../utils/media'
import { dark, white, purple, darkPurple, acid } from '../utils/colors'

const Button = styled.button`
	display: flex;
	align-items: center;
	font-family: Barlow, sans-serif;
	font-size: ${props => (props.bigger ? `1.2em` : `1em`)};
	font-weight: 500;
	letter-spacing: ${props => (props.bigger ? `0.5px` : `0.3px`)};
	color: ${props => (props.purple ? white : dark)};
	text-decoration: none;
	text-align: center;
	padding: ${props =>
		props.bigger ? `0.7em 1.4em 0.9em 1.4em` : `0.6em 1.2em`};
	background-color: ${props => (props.purple ? purple : white)};
	cursor: pointer;
	margin: ${props => (props.left ? `0.6em 0.6em 0.6em 0` : `1em 0.3em`)};
	border: none;
	border-radius: 100px;
	line-height: 20px;
	box-shadow: 0 2px 4px ${props => (props.purple ? `none` : acid)};
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	user-select: none;

	&:focus {
		outline: ${props => (props.focus ? `default` : `none`)};
	}

	&:active {
		background-color: ${props => (props.purple ? darkPurple : acid)};
	}

	${media.mbl`
		margin: ${props => (props.left ? `0.8em 0.8em 0.8em 0` : `1em 0.5em`)};
	`};
	${media.tab`
		margin: ${props => (props.left ? `1em 1em 1em 0` : `1em 0.75em`)};
	`};
	${media.desk`
		&:hover {
			box-shadow: 0 4px 4px ${props => (props.purple ? `none` : acid)};
			background-color: ${props => (props.purple ? darkPurple : `none`)};
		}
	`};
`

export default Button
