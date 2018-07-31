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
import Row from '../components/row'
import Block from '../components/block'
import Content from '../components/content'
import ReactMarkdown from 'react-markdown'
import EmojiFaq from '../components/emojiFaq'
import FaqDesk from '../components/faqDesk'
import FaqMbl from '../components/faqMbl'
import '../utils/anchors.css'

class Faq extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sections: [],
		}
	}

	componentDidMount() {
		this.assignSectionIds()
	}

	assignSectionIds() {
		let sectionTitles = document.getElementsByTagName('h3') // Get all section titles
		let sections = Array.from(sectionTitles) // HTML Collection to Array
		let i
		for (i = 0; i < sections.length; i++) {
			// Loop through Array
			sections[i].id = i // Assign a unique id for each section in ascending order
			sections[i].setAttribute('class', 'anchorOffset')
		}
		this.setState({ sections: sections })
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
						<EmojiFaq />
						<TextXL center padding="0.5em 0 0.25em 0">
							{title}
						</TextXL>
					</Column>
				</Column>
				<FaqMbl list={this.state.sections} prompt={'See all FAQs'} />
				<Row
					style={{
						justifyContent: 'center',
						margin: '0 0 2em 0',
					}}
				>
					<FaqDesk sections={this.state.sections} />
					<Content
						style={{
							margin: 0,
						}}
					>
						<TextM id="markdown" className="faq" padding="0">
							<ReactMarkdown source={content} />
						</TextM>
					</Content>
				</Row>
			</div>
		)
	}
}

export default Faq

export const faqPageQuery = graphql`
	query faqPageQuery($id: String!) {
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
