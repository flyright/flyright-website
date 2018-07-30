import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import TextXL from './textXL'
import TextL from './textL'
import TextM from './textM'
import Block from './block'
import Row from './row'
import IconComplete from './iconComplete'
import IconCompleteWrapper from './iconCompleteWrapper'
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
				padding="0 1.5em 2em 1.5em"
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: ~~title % 2 == 0 ? `flex-end` : `flex-start`,
					borderRight: ~~title % 2 == 0 ? `solid 2px ${smoke}` : `none`,
					borderLeft: ~~title % 2 == 0 ? `none` : `solid 2px ${smoke}`,
				}}
			>
				<TextXL padding="0.1em 0 0 0">{title}</TextXL>
			</Block>
			<Block
				width="50vw"
				padding="0.3em 1.5em 2em 1.5em"
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: ~~title % 2 == 0 ? `flex-start` : `flex-end`,
				}}
			>
				{content.map(item => (
					<div key={item.id} style={{ padding: '0.5em 0' }}>
						<Row
							style={{
								position: 'relative',
								justifyContent: ~~title % 2 == 0 ? `flex-start` : `flex-end`,
							}}
						>
							<IconCompleteWrapper isEven={~~title % 2 == 0 ? true : false}>
								<IconComplete purple={item.isCompleted ? true : false} />
							</IconCompleteWrapper>
							<TextL
								smaller
								style={{ textAlign: ~~title % 2 == 0 ? `left` : `right` }}
							>
								{item.timeframe}
							</TextL>
						</Row>
						<TextM
							id="markdown"
							className="roadmap"
							smaller
							style={{
								textAlign: ~~title % 2 == 0 ? `left` : `right`,
								maxWidth: '200px',
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
