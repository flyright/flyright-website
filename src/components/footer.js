import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import LogoIcon from './logoIcon'
import LinkInternal from './linkInternal'
import LinkExternal from './linkExternal'
import Container from './container'
import Block from './block'
import Column from './column'
import Row from './row'
import { dark, white } from '../utils/colors'
import TextS from './textS'
import TextM from './textM'
import TextL from './textL'
import FooterWrapper from './footerWrapper'
import {
	about,
	blog,
	roadmap,
	presskit,
	android,
	ios,
	web,
	api,
	faq,
	twitter,
	terms,
	privacy,
} from '../utils/links'

const Footer = props => {
	return (
		<Bar>
			<FooterWrapper>
				<Container>
					<Row>
						<Column left>
							<TextL color={white}>Company</TextL>
							<LinkInternal to={about}>
								<TextM color={white}>About</TextM>
							</LinkInternal>
							<LinkInternal to={blog}>
								<TextM color={white}>Blog</TextM>
							</LinkInternal>
							<LinkInternal to={roadmap}>
								<TextM color={white}>Roadmap</TextM>
							</LinkInternal>
							<LinkInternal to={presskit}>
								<TextM color={white}>Press Kit</TextM>
							</LinkInternal>
						</Column>
						<Column left>
							<TextL color={white}>Platform</TextL>
							<LinkExternal href={android} target="_blank" rel="noopener">
								<TextM color={white}>Android</TextM>
							</LinkExternal>
							<LinkExternal href={ios} target="_blank" rel="noopener">
								<TextM color={white}>iOS</TextM>
							</LinkExternal>
							<LinkExternal href={web} target="_blank" rel="noopener">
								<TextM color={white}>Web</TextM>
							</LinkExternal>
							<LinkInternal to={api}>
								<TextM color={white}>API</TextM>
							</LinkInternal>
						</Column>
					</Row>
					<Row>
						<Column left>
							<TextL color={white}>Support</TextL>
							<LinkExternal href={faq} target="_blank" rel="noopener">
								<TextM color={white}>FAQ</TextM>
							</LinkExternal>
							<LinkExternal href={twitter} target="_blank" rel="noopener">
								<TextM color={white}>Twitter</TextM>
							</LinkExternal>
						</Column>
						<Column left>
							<TextL color={white}>Legal</TextL>
							<LinkInternal to={terms}>
								<TextM color={white}>Terms of Service</TextM>
							</LinkInternal>
							<LinkInternal to={privacy}>
								<TextM color={white}>Privacy Policy</TextM>
							</LinkInternal>
						</Column>
					</Row>
				</Container>
			</FooterWrapper>
		</Bar>
	)
}

const Bar = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${dark};
`

export default Footer
