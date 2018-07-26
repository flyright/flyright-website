import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import TextM from './textM'
import TextL from './textL'
import HeaderDeskSubNav from './headerDeskSubNav'
import LinkInternal from './linkInternal'
import LinkExternal from './linkExternal'
import Block from './block'

class HeaderMblSubNav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		return (
			<Bar>
				<Block padding="1em 0">
					<TextL smaller padding="0.2em 1em">
						{this.props.section}
					</TextL>
					{this.props.items.map(
						item =>
							item.isExternal ? (
								<LinkExternal href={item.slug} target="_blank" rel="noopener">
									<TextM headerMbl padding="0.5em 1.25em" key={item.text}>
										{item.text}
									</TextM>
								</LinkExternal>
							) : (
								<LinkInternal to={item.slug}>
									<TextM headerMbl padding="0.5em 1.25em" key={item.text}>
										{item.text}
									</TextM>
								</LinkInternal>
							)
					)}
				</Block>
			</Bar>
		)
	}
}

const Bar = styled.div`
	max-width: 140px;
	margin: 0 0.2em;

	${media.mbl`
		margin: 0 0.75em;
	`};
`

export default HeaderMblSubNav
