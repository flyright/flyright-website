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

const Header = props => {
	return (
		<Bar>
			<Block>
				<LinkInternal to="/" borderless aria-label="Link to home">
					<LogoIcon />
				</LinkInternal>
			</Block>
			<Row center>
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
		</Bar>
	)
}

const Bar = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 80px;
	padding: 0 1em;
	border-bottom: 1px solid #f4f4f4;
`

export default Header
