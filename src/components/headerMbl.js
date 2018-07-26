import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import HeaderMblSubNav from './headerMblSubNav'
import { company, platform, support, legal } from '../utils/navigation'

class HeaderMbl extends React.Component {
	render() {
		return (
			<Header>
				<HeaderMblSubNav section="Company" items={company} />
				<HeaderMblSubNav section="Platform" items={platform} />
				<HeaderMblSubNav section="Support" items={support} />
				<HeaderMblSubNav section="Legal" items={legal} />
			</Header>
		)
	}
}

const Header = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 2em 0.25em;
	justify-content: center;
`

export default HeaderMbl
