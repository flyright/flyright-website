import styled from 'styled-components'
import media from '../utils/media'

const IconCompleteWrapper = styled.div`
	position: absolute;
	bottom: 9px;
	${props => (props.isEven ? `left: -34px` : `right: -34px`)};
`

export default IconCompleteWrapper
