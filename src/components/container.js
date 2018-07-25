import styled from 'styled-components'
import media from '../utils/media'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	${media.tab`
		flex-direction: row;
		flex-wrap: wrap;
		align-items: ${props => (props.footer ? `flex-start` : `stretch`)};
		justify-content: center;
	`};
`

export default Container
