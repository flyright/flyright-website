import styled from 'styled-components'
import media from '../utils/media'
import { white, smoke } from '../utils/colors'

const ListModalOpen = styled.div`
	display: flex;
	flex-direction: row;
	width: 100vw;
	justify-content: center;
	border-top: 1px solid ${smoke};
	border-bottom: 1px solid ${smoke};
	background-color: ${white};
	cursor: pointer;
	margin: ${props => (props.margin ? props.margin : `0 0 3em 0`)};
	position: sticky;
	top: 74px;
	z-index: 1;

	${media.desk`
		display: none;
	`};
`

export default ListModalOpen
