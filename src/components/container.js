import styled from 'styled-components'
import media from '../utils/media'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	${media.desk`
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: space-evenly;
	`};
`

export default Container
