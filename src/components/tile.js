import styled from 'styled-components'
import media from '../utils/media'
import { dark, white } from '../utils/colors'

const Tile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.75em 1.5em;
	background-color: ${white};
	margin: 2em 0;
	border-radius: 10px;
	max-width: 300px;
	box-shadow: 0 1px 3px rgba(2, 8, 54, 0), 0 1px 7px rgba(2, 8, 54, 0.1);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`

export default Tile
