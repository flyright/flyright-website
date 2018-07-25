import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import { purple } from '../utils/colors'

const IconProductHunt = () => (
	<Svg
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-labelledby="iconProductHunt"
	>
		<title id="iconProductHunt">Product Hunt Logo Icon</title>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-374.000000, -2015.000000)" fill="#FFFFFF">
				<g transform="translate(0.000000, 1679.000000)">
					<path d="M398,348 C398,354.6274 392.6274,360 386,360 C379.3726,360 374,354.6274 374,348 C374,341.3726 379.3726,336 386,336 C392.6274,336 398,341.3726 398,348 M387.6,347.99996 L387.6,348.00006 L384.2,348.00006 L384.2,344.40006 L387.6,344.40006 L387.6,344.39996 C388.5941,344.39996 389.4,345.20586 389.4,346.19996 C389.4,347.19406 388.5941,347.99996 387.6,347.99996 M387.6,341.99996 L387.6,342.00006 L381.8,341.99996 L381.8,353.99996 L384.2,353.99996 L384.2,350.40006 L387.6,350.40006 L387.6,350.39996 C389.9196,350.39996 391.8,348.51956 391.8,346.19996 C391.8,343.88036 389.9196,341.99996 387.6,341.99996" />
				</g>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 24px;
	height: 24px;
	padding: 0.5em 0.75em;

	&:hover g g {
		fill: ${purple};
	}
`

export default IconProductHunt
