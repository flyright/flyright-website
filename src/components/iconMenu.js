import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'

const IconMenu = () => (
	<Svg
		viewBox="0 0 6 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-labelledby="menu"
	>
		<title id="menu">Menu</title>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-337.000000, -28.000000)">
				<g>
					<g transform="translate(322.000000, 22.000000)">
						<polygon points="0 0 36 0 36 36 0 36" />
						<path
							d="M18,12 C19.65,12 21,10.65 21,9 C21,7.35 19.65,6 18,6 C16.35,6 15,7.35 15,9 C15,10.65 16.35,12 18,12 Z M18,15 C16.35,15 15,16.35 15,18 C15,19.65 16.35,21 18,21 C19.65,21 21,19.65 21,18 C21,16.35 19.65,15 18,15 Z M18,24 C16.35,24 15,25.35 15,27 C15,28.65 16.35,30 18,30 C19.65,30 21,28.65 21,27 C21,25.35 19.65,24 18,24 Z"
							fill="#020836"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 6px;
	height: 24px;
	cursor: pointer;
	padding: 0 1em;
	margin: 0.1em 0.5em 0 0;
	${media.mbl`
		padding: 0 1.5em;
		margin: 0.1em 1em 0 0;
	`};
	${media.tab`
		transform: rotate(90deg);
		padding: padding: 0 2em;
		margin: 0.1em 1.5em 0 0;
	`};
`

export default IconMenu
