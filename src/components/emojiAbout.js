import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import { purple, darkPurple } from '../utils/colors'

const EmojiAbout = () => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 60 60"
		aria-labelledby="emojiAbout"
	>
		<title id="emojiAbout">Information emoji</title>
		<g fill="none" fillRule="evenodd">
			<path
				fill={purple}
				fillRule="nonzero"
				d="M60,48 C60,54.6 54.6,60 48,60 L12,60 C5.4,60 0,54.6 0,48 L0,12 C0,5.399 5.4,0 12,0 L48,0 C54.6,0 60,5.399 60,12 L60,48 Z"
			/>
			<path
				fill={darkPurple}
				fillRule="nonzero"
				d="M54.838,2.162 C56.2449281,4.16465963 56.9999125,6.5525335 57,9 L57,46 C57,52.6 52.602,57 46,57 L9,57 C6.463,57 4.105,56.195 2.162,54.838 C4.336,57.949 7.938,60 12,60 L48,60 C54.602,60 60,54.6 60,48 L60,12 C60,7.938 57.951,4.336 54.838,2.162 Z"
			/>
			<path
				fill="#AE87FF"
				d="M2.975,10.585 C3.313,13.288 7.768,7.998 12.278,3.449 C15.188,0.524 1.957,2.45 2.975,10.585 Z"
			/>
			<polygon
				fill="#FFF"
				fillRule="nonzero"
				points="25.004 25.75 35.004 25.75 35.004 49.75 25.004 49.75"
			/>
			<circle cx="30.004" cy="15.25" r="5" fill="#FFF" fillRule="nonzero" />
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 40px;
	height: 40px;
`

export default EmojiAbout
