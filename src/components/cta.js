import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import TextXL from './textXL'
import TextM from './textM'
import Column from './column'
import Row from './row'
import Block from './block'
import Button from './button'
import LinkExternal from './linkExternal'
import LinkInternal from './linkInternal'
import IconIos from './iconIos'
import IconAndroid from './iconAndroid'
import ReactMarkdown from 'react-markdown'
import { dark, white } from '../utils/colors'

const Cta = props => {
	const items = props.cta.content
	return (
		<Bar>
			{items &&
				items.map(item => (
					<Column
						key={item.id}
						style={{
							padding: '3em 0',
						}}
					>
						<TextXL key={item.title} color={white} padding="0.2em 0">
							{item.title}
						</TextXL>
						<Column
							style={{
								flexDirection:
									item.layout === `Top` ? `column-reverse` : `column`,
							}}
						>
							<Block>
								{item.hasDownloadButtons && (
									<Row center style={{ justifyContent: 'center' }}>
										<Button purple bigger>
											<IconIos white bigger />
											iOS
										</Button>
										<Button purple bigger>
											<IconAndroid white bigger />
											Android
										</Button>
									</Row>
								)}
								{item.buttonText && (
									<Row center style={{ justifyContent: 'center' }}>
										{item.isExternal ? (
											<LinkExternal
												href={item.buttonSlug}
												target="_blank"
												rel="noopener"
											>
												<Button purple bigger>
													{item.buttonText}
												</Button>
											</LinkExternal>
										) : (
											<LinkInternal to={item.buttonSlug}>
												<Button purple bigger>
													{item.buttonText}
												</Button>
											</LinkInternal>
										)}
									</Row>
								)}
							</Block>
							<Block>
								{item.body && (
									<TextM medium color={white}>
										{item.body.body}
									</TextM>
								)}
							</Block>
						</Column>
					</Column>
				))}
		</Bar>
	)
}

const Bar = styled.div`
	background-color: ${dark};
`

export default Cta
