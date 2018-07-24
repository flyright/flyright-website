import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import LogoIcon from './logoIcon'
import LinkInternal from './linkInternal'
import Block from './block'
import Row from './row'
import { dark, white } from '../utils/colors'
import TextS from './textS'
import TextM from './textM'
import TextL from './textL'
import FooterWrapper from './footerWrapper'

const Footer = props => {
	return (
		<Bar>
			<FooterWrapper>
				<TextM color={white}>Hi, this is a footer</TextM>
			</FooterWrapper>
		</Bar>
	)
}

const Bar = styled.div`
	background-color: ${dark};
`

export default Footer
