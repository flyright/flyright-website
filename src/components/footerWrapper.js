import styled from 'styled-components'
import media from '../utils/media'

const FooterWrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 1em 0;

	${media.desk`
		max-width: 750px;
		margin: 0 auto;
		padding: 0.5em 0 1em 0;
	`};
`

export default FooterWrapper
