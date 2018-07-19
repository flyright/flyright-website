import React from 'react'
import Helmet from 'react-helmet'
import TextXS from '../components/textXS'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextL from '../components/textL'
import TextXXL from '../components/textXXL'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Column from '../components/column'
import Block from '../components/block'
import Img from 'gatsby-image'
import LinkInternal from '../components/linkInternal'
import LinkExternal from '../components/linkExternal'
import Card from '../components/card'
import { light } from '../utils/colors'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		return (
			<Wrapper padding="0 1em">
				<Helmet>
					<title>Flyright</title>
					<meta name="title" content="Flyright" />
					<meta name="description" content="The all-in-one travel companion" />
					<meta name="keywords" content="Travel, flight, international" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Flyright" />
					<meta
						property="og:description"
						content="The all-in-one travel companion"
					/>
					<meta property="og:url" content="https://flyright.co" />
				</Helmet>
			</Wrapper>
		)
	}
}

export default Index
