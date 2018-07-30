import React from 'react'
import Helmet from 'react-helmet'
import TextXS from '../components/textXS'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextL from '../components/textL'
import TextXL from '../components/textXL'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Column from '../components/column'
import Block from '../components/block'
import Milestone from '../components/milestone'
import EmojiRoadmap from '../components/emojiRoadmap'

class Roadmap extends React.Component {
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
					<title>{title}</title>
					<meta name="title" content={title} />
					<meta name="description" content={description.description} />
					<meta name="keywords" content={keywords.join(', ')} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description.description} />
					<meta property="og:url" content={`https://flyright.co/${slug}`} />
				</Helmet>
				<Column padding="1em 0 2em 0">
					<Column padding="2em 0 0 0">
						<EmojiRoadmap />
						<TextXL center padding="0.5em 0 0.25em 0">
							{title}
						</TextXL>
					</Column>
					<Block width="100%" padding="2em 0">
						{content &&
							content.map(section => (
								<Milestone key={section.id} {...section} />
							))}
					</Block>
				</Column>
			</div>
		)
	}
}

export default Roadmap

export const roadmapPageQuery = graphql`
	query roadmapPageQuery($id: String!) {
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
									... on ContentfulMilestone {
										id
										isCompleted
										timeframe
										action {
											action
										}
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
