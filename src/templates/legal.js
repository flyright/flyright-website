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
import EmojiLegal from '../components/emojiLegal'
import ReactMarkdown from 'react-markdown'
import Content from '../components/content'

class Legal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		const page = this.props.data.allContentfulPage.edges
		const { title, slug, description, keywords } = page[0].node // Page info
		const content = page[0].node.content.content[0].body.body // Array of content

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
						<EmojiLegal />
						<TextXL center padding="0.5em 0 0.25em 0">
							{title}
						</TextXL>
					</Column>
					<Content>
						<TextM id="markdown">
							<ReactMarkdown source={content} />
						</TextM>
					</Content>
				</Column>
			</div>
		)
	}
}

export default Legal

export const legalPageQuery = graphql`
	query legalPageQuery($id: String!) {
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
						... on ContentfulContainer {
							content {
								... on ContentfulBlockText {
									body {
										body
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
