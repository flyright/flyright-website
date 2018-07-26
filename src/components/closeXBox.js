import styled from 'styled-components'
import media from '../utils/media'

const CloseXBox = styled.div`
	position: absolute;
	top: 1.5em;
	right: 1.1em;
	width: 2em;
	height: 2em;
	${media.tab`
		right: 1.5em;
	`};
`

export default CloseXBox
