import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import Anchor from './anchor'
import TextM from './textM'
import Block from './block'
import Row from './row'
import Column from './column'
import IconClose from './iconClose'
import Modal from 'react-modal'
import { white, smoke } from '../utils/colors'

class FaqMbl extends React.Component {
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
				height: '100vh',
				backgroundColor: white,
				border: 'none',
				borderRadius: '5px',
			},
		}

		const { sections } = this.props
		return (
			<Contents>
				<Row
					onClick={this.toggleModal}
					center
					margin="0 0 3em 0"
					style={{
						justifyContent: 'center',
						borderTop: `1px solid ${smoke}`,
						borderBottom: `1px solid ${smoke}`,
						backgroundColor: white,
						cursor: 'pointer',
					}}
				>
					<TextM medium>See all FAQs</TextM>
				</Row>
				<Modal
					isOpen={this.state.showModal}
					onRequestClose={this.toggleModal}
					style={modalStyles}
					contentLabel="FAQ Anchor Mobile Menu"
				>
					<Block onClick={this.toggleModal}>
						<IconClose />
					</Block>
					<Column center margin="2em 0">
						{sections.map(section => (
							<Anchor
								key={section.id}
								href={`#${section.id}`}
								onClick={this.toggleModal}
							>
								<TextM smaller medium padding="0 0 1.5em 0">
									{section.innerText}
								</TextM>
							</Anchor>
						))}
					</Column>
				</Modal>
			</Contents>
		)
	}
}

const Contents = styled.div`
	position: sticky;
	top: 74px;

	${media.desk`
		display: none;
	`};
`
export default FaqMbl
