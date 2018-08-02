import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import TriBlock from './triBlock'
import TextL from './textL'
import TextM from './textM'
import ReactMarkdown from 'react-markdown'
import { white } from '../utils/colors'

class Tri extends React.Component {
	render() {
		const item = this.props

		return (
			<TriBlock width="325px">
				{item.icon && <img src={item.icon.file.url} />}
				<TextL color={white} center padding="0.75em 0 0 0">
					{item.title}
				</TextL>
				<TextM color={white} center padding="0">
					<ReactMarkdown source={item.body.body} />
				</TextM>
			</TriBlock>
		)
	}
}

export default Tri
