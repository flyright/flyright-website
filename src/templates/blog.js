import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextL from '../components/textL'
import TextXL from '../components/textXL'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Column from '../components/column'
import Block from '../components/block'
import Row from '../components/row'
import Img from 'gatsby-image'
import LinkInternal from '../components/linkInternal'
import LinkExternal from '../components/linkExternal'
import Card from '../components/card'
import Button from '../components/button'
import Filter from '../components/filter'
import EmojiBlog from '../components/emojiBlog'
import uniq from 'lodash/uniq'
import { white } from '../utils/colors'

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			loaded: false,
			posts: this.props.data.allContentfulBlogPost.edges,
			currentFilter: this.props.location.state || '',
			filteredPosts: [],
		}
	}

	filterPosts(e) {
		var filteredPosts = []
		this.state.posts.filter(post => {
			post.node.category.includes(e.target.innerHTML) &&
				filteredPosts.push(post)
		})
		this.setState({
			currentFilter: e.target.innerHTML,
			filteredPosts: filteredPosts,
		})
	}

	filterPostsFromArticle() {
		var filteredPosts = []
		this.state.posts.filter(post => {
			post.node.category.includes(this.props.location.state) &&
				filteredPosts.push(post)
		})
		this.setState({
			currentFilter: this.props.location.state,
			filteredPosts: filteredPosts,
		})
	}

	componentDidMount() {
		const posts = this.props.data.allContentfulBlogPost.edges
		const knownCategories = []

		posts.map(post => {
			// Map over each post
			const postCategories = post.node.category // Get all categories
			postCategories.forEach(category => {
				// Loop through post categories
				knownCategories.push(category) // Push each post categories to new array
			})
		})

		if (this.props.location.state) {
			this.filterPostsFromArticle()
		}

		// Set state with all known unique categories
		this.setState({ categories: uniq(knownCategories), loaded: true })
	}

	render() {
		const {
			categories,
			loaded,
			posts,
			currentFilter,
			filteredPosts,
		} = this.state

		const page = this.props.data.allContentfulPage.edges
		const { title, slug, description, keywords } = page[0].node

		return (
			<Wrapper padding="0 1em 5em 1em">
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
						<EmojiBlog />
						<TextXL center padding="0.5em 0 0.25em 0">
							Blog
						</TextXL>
					</Column>
					<Block>
						<Filter>
							<Button
								onClick={() => this.setState({ currentFilter: '' })}
								style={{
									backgroundColor: currentFilter !== '' ? white : `ghostwhite`,
								}}
							>
								All
							</Button>
							{loaded &&
								categories.map(category => {
									return (
										<Button
											key={category}
											onClick={e => this.filterPosts(e)}
											style={{
												backgroundColor:
													category === currentFilter ? `ghostwhite` : white,
											}}
										>
											{category}
										</Button>
									)
								})}
						</Filter>
					</Block>
				</Column>
				<Container role="main">
					{currentFilter !== ''
						? filteredPosts.map(post => <Card post={post} key={post.node.id} />)
						: posts.map(post => <Card post={post} key={post.node.id} />)}
				</Container>
			</Wrapper>
		)
	}
}

export default Blog

export const blogPageQuery = graphql`
	query blogPageQuery($id: String!) {
		allContentfulPage(filter: { id: { eq: $id } }) {
			edges {
				node {
					id
					title
					description {
						description
					}
					keywords
				}
			}
		}
		allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
			edges {
				node {
					id
					slug
					title
					date(formatString: "MMMM DD, YYYY")
					description {
						description
					}
					previewImage {
						id
						title
						sizes {
							...GatsbyContentfulSizes_withWebp
						}
					}
					category
				}
			}
		}
	}
`
