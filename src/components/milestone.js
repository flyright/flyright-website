import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import TextXL from './textXL'
import TextL from './textL'
import TextM from './textM'
import Block from './block'
import ReactMarkdown from 'react-markdown'
import { dark, white, smoke } from '../utils/colors'

const Milestone = props => {
	const { title, content } = props
	return (
		<Section
			style={{
				flexDirection: ~~title % 2 == 0 ? `row` : `row-reverse`,
			}}
		>
			<Block
				width="50vw"
				padding="0 1em 2em 1em"
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: ~~title % 2 == 0 ? `flex-end` : `flex-start`,
					borderRight: ~~title % 2 == 0 ? `solid 2px ${smoke}` : `none`,
					borderLeft: ~~title % 2 == 0 ? `none` : `solid 2px ${smoke}`,
				}}
			>
				<TextXL>{title}</TextXL>
			</Block>
			<Block
				width="50vw"
				padding="0.3em 1em 2em 1em"
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: ~~title % 2 == 0 ? `flex-start` : `flex-end`,
				}}
			>
				{content.map(item => (
					<div style={{ padding: '0.5em 0' }}>
						<TextL
							smaller
							style={{ textAlign: ~~title % 2 == 0 ? `left` : `right` }}
						>
							{item.timeframe}
						</TextL>
						<TextM
							id="markdown"
							className="roadmap"
							style={{
								textAlign: ~~title % 2 == 0 ? `left` : `right`,
								maxWidth: '260px',
							}}
						>
							<ReactMarkdown source={item.action.action} />
						</TextM>
					</div>
				))}
			</Block>
		</Section>
	)
}

const Section = styled.div`
	position: relative;
	display: flex;
`

export default Milestone
