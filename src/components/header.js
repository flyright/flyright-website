import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import LogoIcon from './logoIcon'
import LogoWords from './logoWords'
import IconAndroid from './iconAndroid'
import IconIos from './iconIos'
import IconMenu from './iconMenu'
import LinkInternal from './linkInternal'
import Block from './block'
import Row from './row'
import Button from './button'
import HeaderDesk from './headerDesk'
import HeaderWrapper from './headerWrapper'
import { white, smoke, acid } from '../utils/colors'

const Header = props => {
	return (
		<Bar>
			<HeaderWrapper>
				<Row center padding="0 0 0.2em 0">
					<LinkInternal to="/" aria-label="Link to home">
						<Row center>
							<LogoIcon />
							<LogoWords />
						</Row>
					</LinkInternal>
				</Row>
				<HeaderDesk />
				<Row center padding="0 0 0.2em 0">
					<Button>
						<IconIos />
						iOS
					</Button>
					<Button>
						<IconAndroid />
						Android
					</Button>
					<Block>
						<IconMenu />
					</Block>
				</Row>
			</HeaderWrapper>
		</Bar>
	)
}

const Bar = styled.div`
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${white};
	box-shadow: 0 1px 2px ${smoke};
`

export default Header
