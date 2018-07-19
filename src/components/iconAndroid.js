import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'

const IconAndroid = () => (
	<Svg
		viewBox="0 0 17 19"
		xmlns="http://www.w3.org/2000/svg"
		aria-labelledby="iconAndroid"
	>
		<title id="iconAndroid">Google Play Store</title>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				transform="translate(-212.000000, -29.000000)"
				fill="#020836"
				fillRule="nonzero"
			>
				<g>
					<g transform="translate(95.000000, 18.000000)">
						<g transform="translate(99.000000, 0.000000)">
							<path d="M18,28.7002647 L18,12.3016452 C18,11.7294009 18.3221271,11.2347511 18.7895889,11 L28,20.4981575 L18.7858847,30 C18.3204247,29.7645351 18,29.2710332 18,28.7002647 Z M31,23.143584 L21,29 L28.8867588,21 L31,23.143584 Z M34.4507124,19.3111232 C34.7846114,19.5850358 35,20.0166406 35,20.5021086 C35,20.9802815 34.7911383,21.4060903 34.4658175,21.6805025 L32.3334701,23 L30,20.4992105 L32.331885,18 L34.4507124,19.3111232 Z M21,11 L31,16.8564285 L28.8867656,19 L21,11 Z" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 17px;
	height: 19px;
	padding: 1px 0;
	margin: 0 0.4em 0.1em 0;
`

export default IconAndroid
