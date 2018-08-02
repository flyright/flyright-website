import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import TextL from './textL'
import TextM from './textM'
import Column from './column'
import Button from './button'
import LinkExternal from './linkExternal'

class Downloadable extends React.Component {
	render() {
		const item = this.props

		return (
			<Column style={{ width: '300px', margin: '1.5em 0' }}>
				<TextL smaller center padding="0">
					{item.title}
				</TextL>
				<LinkExternal download href={item.zip.file.url}>
					<Button bigger>Download</Button>
				</LinkExternal>
			</Column>
		)
	}
}

export default Downloadable
