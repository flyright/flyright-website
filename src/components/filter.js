import styled from 'styled-components'
import media from '../utils/media'

const Filter = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: ${props => (props.article ? `flex-start` : `center`)};
	padding: ${props => (props.padding ? props.padding : `auto`)};
	margin: ${props => (props.margin ? props.margin : `auto`)};
`

export default Filter
