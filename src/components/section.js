import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import SectionContainer from './sectionContainer'
import SectionBlock from './sectionBlock'
import TextL from './textL'
import TextM from './textM'
import Img from 'gatsby-image'

class Section extends React.Component {
	render() {
		const item = this.props

		return (
			<SectionContainer layout={item.layout}>
				<SectionBlock width="500px" height="500px">
					{item.image && <Img sizes={item.image.sizes} alt={item.title} />}
				</SectionBlock>
				<SectionBlock text layout={item.layout}>
					<TextL padding="0.75em 0">{item.title}</TextL>
					<TextM padding="0 0 2em 0">{item.body.body}</TextM>
				</SectionBlock>
			</SectionContainer>
		)
	}
}

export default Section
