import React from 'react'
import Helmet from 'react-helmet'
import Wrapper from '../components/wrapper'
import Block from '../components/block'
import Logo from '../components/logo'
import Header from '../components/header'
import TextM from '../components/textM'
import TextXL from '../components/textXL'
import Column from '../components/column'
import LinkInternal from '../components/linkInternal'

class MissingRoute extends React.Component {
	render() {
		return (
			<Wrapper padding="0 1em">
				<Header>
					<Block>
						<LinkInternal to="/" borderless>
							<Logo />
						</LinkInternal>
					</Block>
				</Header>
				<Column padding="2em 0">
					<TextXL>404</TextXL>
					<TextM center padding="2em 0" style={{ width: '250px' }}>
						Whoops, nothing here. <br />
						<LinkInternal to="/">Return home?</LinkInternal>
					</TextM>
				</Column>
			</Wrapper>
		)
	}
}

export default MissingRoute
