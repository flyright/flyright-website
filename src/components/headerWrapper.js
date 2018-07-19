import styled from 'styled-components'
import media from '../utils/media'

const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 74px;
	width: 100%;
	padding: 0 0.5em;
	${media.mbl`
		padding: 0 1em;
	`};
	${media.tab`
		padding: 0 1.5em;
	`}
	${media.desk`
		height: 68px;
		max-width: 960px;
		margin: 0 auto;
	`}
`

export default HeaderWrapper
