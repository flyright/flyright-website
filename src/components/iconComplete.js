import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import { purple, darkPurple } from '../utils/colors'

const IconComplete = props => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 18 18"
		aria-labelledby="iconComplete"
	>
		<title id="iconComplete">Check emoji</title>
		<g fill="none" fillRule="evenodd">
			<path
				fill={props.purple ? purple : `#EBEEEF`}
				fillRule="nonzero"
				d="M18,14.4 C18,16.38 16.38,18 14.4,18 L3.6,18 C1.62,18 0,16.38 0,14.4 L0,3.6 C0,1.6197 1.62,0 3.6,0 L14.4,0 C16.38,0 18,1.6197 18,3.6 L18,14.4 Z"
			/>
			<path
				fill={props.purple ? darkPurple : `#DEE1E2`}
				fillRule="nonzero"
				d="M16.4514,0.6486 C16.8734784,1.24939789 17.0999738,1.96576005 17.1,2.7 L17.1,13.8 C17.1,15.78 15.7806,17.1 13.8,17.1 L2.7,17.1 C1.9389,17.1 1.2318,16.8585 0.6486,16.4514 C1.3008,17.3847 2.3814,18 3.6,18 L14.4,18 C16.3806,18 18,16.38 18,14.4 L18,3.6 C18,2.3814 17.3853,1.3008 16.4514,0.6486 Z"
			/>
			<path
				fill={props.purple ? darkPurple : `#DEE1E2`}
				d="M0.8925,3.1755 C0.9942,3.9864 2.3304,2.3994 3.6834,1.0347 C4.5564,0.1572 0.5871,0.735 0.8925,3.1755 Z"
			/>
			<polygon
				fill="#FFF"
				fillRule="nonzero"
				points="13.202 3.6 6.902 10.086 4.809 7.931 2.7 10.08 6.896 14.4 6.902 14.394 6.907 14.4 15.3 5.76"
			/>
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 18px;
	height: 18px;
`

export default IconComplete
