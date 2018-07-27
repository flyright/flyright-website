import React from 'react'
import Helmet from 'react-helmet'
import TextXS from '../components/textXS'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextL from '../components/textL'
import TextXL from '../components/textXL'
import TextXXL from '../components/textXXL'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Column from '../components/column'
import Block from '../components/block'
import Img from 'gatsby-image'
import LinkInternal from '../components/linkInternal'
import LinkExternal from '../components/linkExternal'
import Section from '../components/section'
import Cta from '../components/cta'
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
		const content = page[0].node.content.content // Array of page content

		return (
			<div>
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
				<Block padding="2.5em 0">
					<TextXL center padding="0 1em" key={content[0].title}>
						{content[0].title}
					</TextXL>
					{content[0].content.map(item => <Section {...item} key={item.id} />)}
				</Block>
				<Block>
					<Cta cta={content[1]} />
				</Block>
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
							... on ContentfulContainer {
								id
								title
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
									... on ContentfulCta {
										id
										title
										body {
											body
										}
										layout
										hasDownloadButtons
										buttonText
										buttonSlug
									}
								}
							}
						}
					}
				}
			}
		}
	}
`
