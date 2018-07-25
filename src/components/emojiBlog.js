import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'

const EmojiBlog = () => (
	<Svg
		viewBox="0 0 60 60"
		xmlns="http://www.w3.org/2000/svg"
		aria-labelledby="emojiBlog"
	>
		<title id="emojiBlog">Writing Hand Emoji</title>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-690.000000, -152.000000)" fillRule="nonzero">
				<g transform="translate(689.000000, 152.000000)">
					<path
						d="M9.8,53.83 C10.186,57.719 14.256,57.393 14.972,56.13 C15.423,55.335 15.817,54.554 16.176,53.783 C17.138,58.585 21.246,57.195 21.593,55.878 C25.466,41.172 8.818,43.978 9.8,53.83 Z"
						fill="#CC9200"
					/>
					<path
						d="M54.515,33.99 C54.515,33.99 24.946,22.825 21.295,22.87 C17.954,22.91 14.66,26.086 5.386,30.895 C2.323,32.484 3.927,39.514 1.188,49.026 C0.107,52.78 4.003,54.001 5.137,53.095 C18.918,42.099 21.987,58.167 31.527,58.403 C46.386,58.769 37.837,56.492 56.355,56.383 C63.991,56.342 61.386,36.414 54.515,33.99 Z"
						fill="#FDCA47"
					/>
					<path
						d="M56.542,53.733 C52.226,53.746 47.092,54.284 43.322,54.835 C33.879,56.215 19.105,39.448 5.324,50.446 C4.444,51.146 1.913,50.563 1.321,48.517 C1.274,48.688 1.237,48.854 1.187,49.026 C0.106,52.78 4.002,54.001 5.136,53.095 C18.917,42.099 21.716,58.772 31.259,58.772 C47.025,58.772 37.835,56.492 56.354,56.383 C59.582,56.364 60.974,53.672 60.993,49.152 C60.516,52.402 59.11,53.726 56.542,53.733 Z M21.295,36.449 C21.295,36.449 30.503,26.249 33.212,26.302 L27.618,24.316 L21.295,36.449 Z"
						fill="#CC9200"
					/>
					<path
						d="M6.664,47.311 C6.664,47.311 11.933,39.364 15.968,36.657 C15.968,36.657 10.322,37.711 10.322,39.077 C10.321,40.305 6.664,47.311 6.664,47.311 Z"
						fill="#CC9200"
					/>
					<polygon
						fill="#302C3B"
						points="42.991 2.419 39.399 0 36.194 4.739 35.284 4.128 5.978 47.453 2.881 56.902 1.188 59.405 2.068 60 3.762 57.496 11.39 51.095 40.695 7.77 39.786 7.158"
					/>
					<path
						d="M45.702,54.424 C56.989,52.186 35.561,30.487 21.295,36.449 C18.639,37.558 13.021,43.541 6.658,47.36 C4.327,48.758 6.491,56.499 11.139,54.586 C19.737,51.046 21.686,49.241 24.113,49.108 C31,48.731 28.326,57.868 45.702,54.424 Z"
						fill="#FDCA47"
					/>
					<path
						d="M9.503,45.58 C6.153,47.157 6.872,48.567 7.928,50.226 C8.984,51.886 9.954,53.135 12.787,50.742 C13.844,49.85 13.528,48.478 12.694,47.167 C11.859,45.853 10.754,44.99 9.503,45.58 Z"
						fill="#CC9200"
					/>
					<path
						d="M8.933,45.855 C5.403,47.519 6.138,48.971 7.225,50.679 C8.31,52.386 9.313,53.666 12.298,51.146 C13.407,50.207 13.094,48.801 12.24,47.458 C11.384,46.115 10.245,45.238 8.933,45.855 Z"
						fill="#FFE8BB"
					/>
				</g>
			</g>
		</g>
	</Svg>
)

const Svg = styled.svg`
	width: 45px;
	height: 45px;
`

export default EmojiBlog