import styled from 'styled-components'
import media from '../utils/media'
import { purple, darkPurple } from '../utils/colors'

const NotificationBar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 40px;
	margin: 0 0 1em 0;
	background-color: ${purple};
	cursor: pointer;
	user-select: none;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		background-color: ${darkPurple};
	}

	${media.tab`
		margin: 0;
	`};
`

export default NotificationBar
