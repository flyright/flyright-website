import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import { smoke } from '../utils/colors'

const SocialProductHunt = () => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 200 200"
		aria-labelledby="socialProductHunt"
	>
		<title id="socialProductHunt">
			Social link to Flyright Product Hunt page
		</title>
		<g fill="none" fillRule="evenodd">
			<circle cx="100" cy="100" r="100" fill="#FAF9FF" />
			<g transform="translate(57 57)">
				<path
					fill="#DA552F"
					d="M86,43 C86,66.7481833 66.7481833,86 43,86 C19.2518167,86 0,66.7481833 0,43 C0,19.2518167 19.2518167,0 43,0 C66.7481833,0 86,19.2518167 86,43"
				/>
				<path
					fill="#FFF"
					d="M48.7333333,42.9998567 L48.7333333,43.000215 L36.55,43.000215 L36.55,30.100215 L48.7333333,30.100215 L48.7333333,30.0998567 C52.295525,30.0998567 55.1833333,32.987665 55.1833333,36.5498567 C55.1833333,40.1120483 52.295525,42.9998567 48.7333333,42.9998567 M48.7333333,21.4998567 L48.7333333,21.500215 L27.95,21.4998567 L27.95,64.4998567 L36.55,64.4998567 L36.55,51.600215 L48.7333333,51.600215 L48.7333333,51.5998567 C57.0452333,51.5998567 63.7833333,44.8617567 63.7833333,36.5498567 C63.7833333,28.2379567 57.0452333,21.4998567 48.7333333,21.4998567"
				/>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 150px;
	height: 150px;

	&:hover g circle {
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		fill: ${smoke};
	}
`

export default SocialProductHunt
