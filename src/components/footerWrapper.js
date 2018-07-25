import styled from 'styled-components'
import media from '../utils/media'

const FooterWrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 1em 0;

	${media.desk`
		max-width: 750px;
		margin: 0 auto;
	`};
`

export default FooterWrapper
