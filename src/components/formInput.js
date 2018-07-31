import styled from 'styled-components'
import media from '../utils/media'
import { acid, dark, light } from '../utils/colors'

const FormInput = styled.input`
	font-family: Barlow, sans-serif;
	font-size: 17px;
	line-height: 26px;
	letter-spacing: 0.2px;
	color: ${dark};
	padding: 0.5em;
	margin: 0.25em 0;
	width: 250px;
	border: 1px solid ${acid};
	border-radius: 3px;
	appearance: none;

	${media.mbl`
		width: 320px;
	`};

	&::placeholder {
		color: ${light};
	}
`

export default FormInput
