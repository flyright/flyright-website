import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import TextM from './textM'
import HeaderDeskSubNav from './headerDeskSubNav'
import LinkInternal from './linkInternal'
import LinkExternal from './linkExternal'

class HeaderDropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showMenu: false,
		}
	}

	toggleMenu() {
		this.state.showMenu
			? this.setState({ showMenu: false })
			: this.setState({ showMenu: true })
	}

	render() {
		return (
			<Bar
				onMouseEnter={::this.toggleMenu}
				onMouseLeave={::this.toggleMenu}
				style={{ cursor: 'pointer' }}
			>
				<TextM
					medium
					smaller
					padding="0 1em 1.5em 1em"
					style={{ margin: `0 0.5em -1.5em 0.5em`, cursor: `pointer` }}
				>
					{this.props.section}
				</TextM>
				{this.state.showMenu && (
					<HeaderDeskSubNav>
						{this.props.items.map(
							item =>
								item.isExternal ? (
									<LinkExternal
										key={item.slug}
										href={item.slug}
										target="_blank"
										rel="noopener"
									>
										<TextM
											smaller
											headerDesk
											padding="0.5em 1.25em"
											key={item.text}
										>
											{item.text}
										</TextM>
									</LinkExternal>
								) : (
									<LinkInternal key={item.slug} to={item.slug}>
										<TextM
											smaller
											headerDesk
											padding="0.7em 1.25em"
											key={item.text}
										>
											{item.text}
										</TextM>
									</LinkInternal>
								)
						)}
					</HeaderDeskSubNav>
				)}
			</Bar>
		)
	}
}

const Bar = styled.div``

export default HeaderDropdown
