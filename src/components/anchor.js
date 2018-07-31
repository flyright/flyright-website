import styled from 'styled-components'
import media from '../utils/media'
import { darkPurple } from '../utils/colors'

const Anchor = styled.a`
	cursor: pointer;
	user-select: none;
	text-decoration: none;

	&:hover div {
		color: ${darkPurple};
	}
`

export default Anchor
