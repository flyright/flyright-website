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
import HeaderWrapper from './headerWrapper'
import { smoke } from '../utils/colors'

const Header = props => {
	return (
		<Bar>
			<HeaderWrapper>
			<Row center padding="0 0 0.2em 0">
				<LinkInternal to="/" borderless aria-label="Link to home">
					<Row center>
						<LogoIcon />
						<LogoWords />
					</Row>
				</LinkInternal>
			</Row>
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
	border-bottom: 1px solid ${smoke};
`

export default Header
