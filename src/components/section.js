import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import SectionContainer from './sectionContainer'
import SectionBlock from './sectionBlock'
import TextL from './textL'
import TextM from './textM'

class Section extends React.Component {
	render() {
		const item = this.props

		return (
			<SectionContainer>
				<SectionBlock width="500px" height="500px">
					{item.image && (
						<img src={item.image.file.url} width="100%" height="100%" />
					)}
				</SectionBlock>
				<SectionBlock text>
					<TextL padding="0.75em 0">{item.title}</TextL>
					<TextM padding="0 0 2em 0">{item.body.body}</TextM>
				</SectionBlock>
			</SectionContainer>
		)
	}
}

export default Section
