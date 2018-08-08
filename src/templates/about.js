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
import EmojiAbout from '../components/emojiAbout'
import EmojiNoTime from '../components/emojiNoTime'
import EmojiSomeTime from '../components/emojiSomeTime'
import EmojiMuchTime from '../components/emojiMuchTime'
import Content from '../components/content'
import Button from '../components/button'
import Row from '../components/row'
import ReactMarkdown from 'react-markdown'

class About extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: 1, // Number of sections to show
		}
	}

	render() {
		const page = this.props.data.allContentfulPage.edges
		const { title, slug, description, keywords } = page[0].node // Page info
		const content = page[0].node.content.content // Array of text blocks

		return (
			<div>
				<Helmet>
					<title>{`${title} | Flyright`}</title>
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
						<EmojiAbout />
						<TextXL center padding="0.5em 0 0.25em 0">
							{title}
						</TextXL>
						<TextM center padding="0.5em 2em" style={{ maxWidth: '300px' }}>
							Here's a bit more about Flyright. How much time do you have?
						</TextM>
					</Column>
					<Row center>
						<Button bigger onClick={() => this.setState({ show: 1 })}>
							<EmojiNoTime />
						</Button>
						<Button bigger onClick={() => this.setState({ show: 2 })}>
							<EmojiSomeTime />
						</Button>
						<Button bigger onClick={() => this.setState({ show: 3 })}>
							<EmojiMuchTime />
						</Button>
					</Row>
					{content &&
						content.slice(0, this.state.show).map(block => (
							<Content key={block.id}>
								<TextM id="markdown" padding="0">
									<ReactMarkdown source={block.body.body} />
								</TextM>
							</Content>
						))}
				</Column>
			</div>
		)
	}
}

export default About

export const aboutPageQuery = graphql`
	query aboutPageQuery($id: String!) {
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
									id
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
