import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import HeaderDropdown from './headerDropdown'
import { company, platform, support } from '../utils/navigation'

class HeaderDesk extends React.Component {
	render() {
		return (
			<Header>
				<HeaderDropdown section="Company" items={company} />
				<HeaderDropdown section="Platform" items={platform} />
				<HeaderDropdown section="Support" items={support} />
			</Header>
		)
	}
}

const Header = styled.div`
	display: none;

	${media.desk`
		display: flex;
		flex-direction: row;
	`};
`

export default HeaderDesk
