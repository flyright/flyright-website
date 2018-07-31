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
import IconClose from '../components/iconClose'
import Modal from 'react-modal'
import ListModalOpen from '../components/listModalOpen'
import uniq from 'lodash/uniq'
import { white, smoke } from '../utils/colors'

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [],
			loaded: false,
			posts: this.props.data.allContentfulBlogPost.edges,
			currentFilter: this.props.location.state || '',
			filteredPosts: [],
			showModal: false,
		}
		this.toggleModal = this.toggleModal.bind(this)
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
			showModal: false,
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

		Modal.setAppElement('#___gatsby')

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

	toggleModal() {
		this.state.showModal
			? this.setState({ showModal: false })
			: this.setState({ showModal: true })
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
				<Column padding="1em 0 0 0">
					<Column padding="2em 0 0 0">
						<EmojiBlog />
						<TextXL center padding="0.5em 0 0.25em 0">
							{title}
						</TextXL>
					</Column>
				</Column>
				<Column>
					<ListModalOpen onClick={this.toggleModal} margin="1em 0 2em 0">
						<TextM medium>Filter by category</TextM>
					</ListModalOpen>
					<Modal
						isOpen={this.state.showModal}
						onRequestClose={this.toggleModal}
						style={modalStyles}
						contentLabel="Mobile Menu Modal"
					>
						<Block onClick={this.toggleModal}>
							<IconClose />
						</Block>
						<Filter show margin="1em 0">
							<Button
								onClick={() =>
									this.setState({ currentFilter: '', showModal: false })
								}
								bigger
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
											bigger
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
					</Modal>
					<Block>
						<Filter show={this.state.showModal ? true : false}>
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
					<Container role="main">
						{currentFilter !== ''
							? filteredPosts.map(post => (
									<Card post={post} key={post.node.id} />
							  ))
							: posts.map(post => <Card post={post} key={post.node.id} />)}
					</Container>
				</Column>
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
