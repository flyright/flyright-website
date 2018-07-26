import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import { dark } from '../utils/colors'

const IconClose = () => (
	<Svg
		width="21px"
		height="20px"
		viewBox="0 0 21 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g
			id="Symbols"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
		>
			<g
				id="Group-33"
				transform="translate(2.000000, 1.000000)"
				stroke={dark}
				strokeWidth="3"
			>
				<path d="M0,18 L17.6776695,0.32233047" id="Path-2" />
				<path
					d="M0.32233047,18 L18,0.32233047"
					id="Path-2-Copy"
					transform="translate(9.161165, 9.161165) scale(-1, 1) translate(-9.161165, -9.161165) "
				/>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	position: absolute;
	z-index: 3;
	top: 0;
	right: 0;
	width: 21px;
	height: 20px;
	margin: 0 0 0 2em;
	cursor: pointer;
	padding: 1.5em 0.75em;
	${media.mbl`
		padding: 1.5em 1em;
	`};
	${media.tab`
		padding: 1.5em;
	`};
`

export default IconClose
