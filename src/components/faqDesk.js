import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import Anchor from './anchor'
import TextM from './textM'
import { smoke } from '../utils/colors'

const FaqDesk = props => {
	const { sections } = props
	return (
		<Contents>
			{sections.map(section => (
				<Anchor key={section.id} href={`#${section.id}`}>
					<TextM smaller medium padding="0 0 1.5em 0">
						{section.innerText}
					</TextM>
				</Anchor>
			))}
		</Contents>
	)
}

const Contents = styled.div`
	display: none;

	${media.desk`
		display: flex;
		flex-direction: column; 
		position: sticky;
		top: 82px;
		width: 15vw;
		height: 85vh;
		overflow-y: scroll;
		padding: 0 1.5em 0 0;
		border-right: 1px solid ${smoke};
	`};
`
export default FaqDesk
