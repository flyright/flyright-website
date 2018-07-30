import styled from 'styled-components'
import media from '../utils/media'

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${props => (props.left ? `flex-start` : `center`)};
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
	width: ${props => (props.footer ? `100px` : `auto`)};

	${media.mbl`
		width: ${props => (props.footer ? `120px` : `auto`)};
	`};
`

export default Column
