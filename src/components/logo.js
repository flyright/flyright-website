import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'

const FlyrightLogo = () => (
	<Svg
		id="logo"
		width="100%"
		height="100%"
		viewBox="0 0 75 75"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-80.000000, -44.000000)">
				<g transform="translate(80.000000, 44.000000)">
					<path
						className="circle"
						d="M37.5163591,74.8969064 C16.8211409,74.8969064 0.0440436242,58.1759197 0.0440436242,37.5496656 C0.0440436242,16.9234114 16.8211409,0.202424749 37.5163591,0.202424749 C58.2120805,0.202424749 74.9891779,16.9234114 74.9891779,37.5496656 C74.9891779,58.1759197 58.2120805,74.8969064 37.5163591,74.8969064 Z"
						id="circ"
						fill="#8449FF"
						fill-rule="nonzero"
					/>
					<path
						className="topTri"
						d="M30.4624,35 L49.8393885,35 C51.539321,35 52.9173885,33.6219325 52.9173885,31.922 C52.9173885,30.804423 52.3116255,29.7746513 51.3348113,29.231685 L31.6587382,18.2946578 C30.4700823,17.6339385 28.9708674,18.0619156 28.310148,19.2505716 C28.1067448,19.6165008 28,20.0282488 28,20.4469098 L28,32.5376 C28,33.897546 29.102454,35 30.4624,35 Z"
						id="tri"
						fill="#FFFFFF"
					/>
					<path
						className="bottomTri"
						d="M28,42.4624 L28,53.0836235 C28,54.4435695 29.102454,55.5460235 30.4624,55.5460235 C30.8318478,55.5460235 31.1965605,55.462891 31.529514,55.3027858 L51.1833961,45.8519529 C52.715408,45.1152645 53.360145,43.2761194 52.6234566,41.7441075 C52.1107947,40.6779798 51.0324873,40 49.8495036,40 L30.4624,40 C29.102454,40 28,41.102454 28,42.4624 Z"
						id="tri"
						fill="#FFFFFF"
					/>
				</g>
			</g>
		</g>
	</Svg>
)

const Logo = styled.svg`
	margin-bottom: 0;
	transform-origin: center;
	width: 40px;
	height: 40px;
	&:hover {
		& .topTri {
			transform-origin: center;
			animation: glideOut 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55),
				glideIn 0.6s 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
		}
		& .bottomTri {
			transform-origin: center;
			animation: glideOut 0.6s 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55),
				glideIn 0.6s 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
		}
	}
	@keyframes glideOut {
		from {
			transform: translateX(0px);
		}
		to {
			transform: translateX(60px);
		}
	}
	@keyframes glideIn {
		from {
			opacity: 0;
			transform: translateX(-60px);
		}
		to {
			transform: translateX(0px);
		}
	}
	${media.tab`
        width: 50px;
        height: 50px;
    `} ${media.desk`
	      width: 55px;
	      height: 55px;
    `};
`

export default Logo
