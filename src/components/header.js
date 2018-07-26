import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import LogoIcon from './logoIcon'
import LogoWords from './logoWords'
import IconAndroid from './iconAndroid'
import IconIos from './iconIos'
import IconMenu from './iconMenu'
import IconClose from './iconClose'
import LinkInternal from './linkInternal'
import LinkExternal from './linkExternal'
import Block from './block'
import Row from './row'
import Button from './button'
import HeaderDesk from './headerDesk'
import HeaderWrapper from './headerWrapper'
import Modal from 'react-modal'
import HeaderMbl from './headerMbl'
import { white, smoke, acid } from '../utils/colors'

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showModal: false,
		}
		this.toggleModal = this.toggleModal.bind(this)
	}

	componentDidMount() {
		Modal.setAppElement('#___gatsby')
	}

	toggleModal() {
		this.state.showModal
			? this.setState({ showModal: false })
			: this.setState({ showModal: true })
	}

	render() {
		const modalStyles = {
			overlay: {
				backgroundColor: 'rgba(10, 0, 55, 0.1)',
				zIndex: 4,
			},
			content: {
				top: 0,
				right: 0,
				left: 'none',
				width: '90vw',
				height: '100%',
				backgroundColor: white,
				border: 'none',
				borderRadius: '5px',
			},
		}

		return (
			<Bar>
				<HeaderWrapper>
					<Row center padding="0 0 0.2em 0">
						<LinkInternal to="/" aria-label="Link to home">
							<Row center>
								<LogoIcon />
								<LogoWords />
							</Row>
						</LinkInternal>
					</Row>
					<HeaderDesk />
					<Row center padding="0 0 0.2em 0">
						<Button>
							<IconIos />
							iOS
						</Button>
						<Button>
							<IconAndroid />
							Android
						</Button>
						<Block onClick={this.toggleModal}>
							<IconMenu />
						</Block>
					</Row>
					<Modal
						isOpen={this.state.showModal}
						onRequestClose={this.toggleModal}
						style={modalStyles}
						contentLabel="Mobile Navigation Menu"
					>
						<Block onClick={this.toggleModal}>
							<IconClose />
						</Block>
						<HeaderMbl />
						<Row
							center
							padding="0 0 3em 0"
							style={{ justifyContent: 'center' }}
						>
							<Button>
								<IconIos />
								iOS
							</Button>
							<Button>
								<IconAndroid />
								Android
							</Button>
						</Row>
					</Modal>
				</HeaderWrapper>
			</Bar>
		)
	}
}

const Bar = styled.div`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${white};
	box-shadow: 0 1px 2px ${smoke};
`

export default Header
