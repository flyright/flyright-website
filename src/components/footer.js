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
import IconTwitter from './iconTwitter'
import IconProductHunt from './iconProductHunt'
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
	contact,
	faq,
	twitter,
	productHunt,
	terms,
	privacy,
} from '../utils/links'

const Footer = props => {
	return (
		<Bar>
			<FooterWrapper>
				<Container footer>
					<Row>
						<Column left footer margin="1em 1.5em">
							<TextL smaller color={white} padding="0 0 0.5em 0">
								Company
							</TextL>
							<LinkInternal footer to={about}>
								<TextM smaller color={white} padding="0.1em 0">
									About
								</TextM>
							</LinkInternal>
							<LinkInternal footer to={blog}>
								<TextM smaller color={white} padding="0.1em 0">
									Blog
								</TextM>
							</LinkInternal>
							<LinkInternal footer to={roadmap}>
								<TextM smaller color={white} padding="0.1em 0">
									Roadmap
								</TextM>
							</LinkInternal>
							<LinkInternal footer to={presskit}>
								<TextM smaller color={white} padding="0.1em 0">
									Press Kit
								</TextM>
							</LinkInternal>
						</Column>
						<Column left footer margin="1em 1.5em">
							<TextL smaller color={white} padding="0 0 0.5em 0">
								Platform
							</TextL>
							<LinkExternal
								footer
								href={android}
								target="_blank"
								rel="noopener"
							>
								<TextM smaller color={white} padding="0.1em 0">
									Android
								</TextM>
							</LinkExternal>
							<LinkExternal footer href={ios} target="_blank" rel="noopener">
								<TextM smaller color={white} padding="0.1em 0">
									iOS
								</TextM>
							</LinkExternal>
							<LinkExternal footer href={web} target="_blank" rel="noopener">
								<TextM smaller color={white} padding="0.1em 0">
									Web
								</TextM>
							</LinkExternal>
							<LinkInternal footer to={api}>
								<TextM smaller color={white} padding="0.1em 0">
									API
								</TextM>
							</LinkInternal>
						</Column>
					</Row>
					<Row>
						<Column left footer margin="1em 1.5em">
							<TextL smaller color={white} padding="0 0 0.5em 0">
								Support
							</TextL>
							<LinkExternal footer href={faq} target="_blank" rel="noopener">
								<TextM smaller color={white} padding="0.1em 0">
									FAQ
								</TextM>
							</LinkExternal>
							<LinkInternal footer to={contact}>
								<TextM smaller color={white} padding="0.1em 0">
									Contact
								</TextM>
							</LinkInternal>
							<LinkExternal
								footer
								href={twitter}
								target="_blank"
								rel="noopener"
							>
								<TextM smaller color={white} padding="0.1em 0">
									Twitter
								</TextM>
							</LinkExternal>
						</Column>
						<Column left footer margin="1em 1.5em">
							<TextL smaller color={white} padding="0 0 0.5em 0">
								Legal
							</TextL>
							<LinkInternal footer to={terms}>
								<TextM
									smaller
									color={white}
									padding="0.1em 0"
									style={{ lineHeight: '26px' }}
								>
									Terms of Service
								</TextM>
							</LinkInternal>
							<LinkInternal footer to={privacy}>
								<TextM smaller color={white} padding="0.1em 0">
									Privacy Policy
								</TextM>
							</LinkInternal>
						</Column>
					</Row>
				</Container>
				<Container style={{ padding: '1em' }}>
					<Row center margin="0 0.75em">
						<LinkExternal footer href={twitter} target="_blank" rel="noopener">
							<IconTwitter />
						</LinkExternal>
						<LinkExternal
							footer
							href={productHunt}
							target="_blank"
							rel="noopener"
						>
							<IconProductHunt />
						</LinkExternal>
					</Row>
					<Row center margin="0 0.75em">
						<TextS color={white}>2018 &copy; Flyright, Inc.</TextS>
					</Row>
				</Container>
			</FooterWrapper>
		</Bar>
	)
}

const Bar = styled.div`
	background-color: ${dark};
`

export default Footer
