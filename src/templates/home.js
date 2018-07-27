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
import Section from '../components/section'
import { light } from '../utils/colors'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		const page = this.props.data.allContentfulPage.edges
		const { title, slug, description, keywords } = page[0].node // Page info
		const items = page[0].node.content.content // Array of page content items

		return (
			<div>
				<Wrapper padding="0">
					<Helmet>
						<title>Flyright</title>
						<meta name="title" content="Flyright" />
						<meta name="description" content={description.description} />
						<meta name="keywords" content={keywords.join(', ')} />
						<meta property="og:type" content="website" />
						<meta property="og:title" content={title} />
						<meta property="og:description" content={description.description} />
						<meta property="og:url" content="https://flyright.co" />
					</Helmet>
				</Wrapper>
				{items && items.map(item => <Section {...item} key={item.id} />)}
			</div>
		)
	}
}

export default Home

export const homePageQuery = graphql`
	query homePageQuery($id: String!) {
		allContentfulPage(filter: { id: { eq: $id } }) {
			edges {
				node {
					id
					title
					slug
					description {
						description
					}
					keywords
					content {
						content {
							... on ContentfulSection {
								id
								title
								body {
									body
								}
								image {
									title
									sizes {
										...GatsbyContentfulSizes_withWebp
									}
								}
								layout
							}
						}
					}
				}
			}
		}
	}
`
