import styled from 'styled-components'
import media from '../utils/media'

const SectionBlock = styled.div`
	width: 300px;
	height: 300px;
	max-width: ${props => (props.text ? `300px` : `none`)};
	margin: ${props => (props.text ? `0 auto` : `initial`)};
	& div {
		text-align: ${props => (props.text ? `center` : `initial`)};
	}

	${media.mbl`
		width: 350px;
		height: 350px;
	`};

	${media.tab`
		display: ${props => (props.text ? `flex` : `block`)};
		flex-direction: ${props => (props.text ? `column` : `initial`)};
		justify-content: ${props => (props.text ? `center` : `initial`)};
		width: 400px;
		height: 400px;
		padding: ${props => (props.text ? `1em` : `none`)};
		margin: ${props => (props.text ? `initial` : `initial`)};
		& div {
			text-align: ${props => (props.text ? `left` : `initial`)};
		}
	`};
	${media.desk`
		width: 500px;
		height: 500px;
		max-width: ${props => (props.text ? `375px` : `none`)};
	`};
`

export default SectionBlock
