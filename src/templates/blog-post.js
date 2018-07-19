import React from 'react'
import Helmet from 'react-helmet'
import Logo from '../components/logo'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Content from '../components/content'
import Header from '../components/header'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextXL from '../components/textXL'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
import LinkInternal from '../components/linkInternal'
import Button from '../components/button'
import Column from '../components/column'
import Row from '../components/row'
import Filter from '../components/filter'
import { light } from '../utils/colors'
import '../utils/markdown.css'
import { navigateTo } from 'gatsby-link'

class BlogPost extends React.Component {
	render() {
		const page = this.props.data.allContentfulBlogPost.edges // returns array of Blog Post children
		const {
			title,
			date,
			slug,
			description,
			previewImage,
			category,
		} = page[0].node
		const content = page[0].node.content.content
		return (
			<div>
				<Helmet>
					<title>Flyright</title>
					<meta name="title" content={title} />
					<meta name="description" content={description.description} />
					<meta name="keywords" content={category.join(', ')} />
					<meta property="og:type" content="article" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description.description} />
					<meta
						property="og:url"
						content={`https://flyright.co/blog/${slug}`}
					/>
				</Helmet>
				<Header>
					<LinkInternal to="/" borderless aria-label="Link to home">
						<Logo />
					</LinkInternal>
				</Header>
				<Wrapper content padding="0.5em 0 2em 0" role="main">
					<Content img key={previewImage.id}>
						<Img sizes={previewImage.sizes} alt={previewImage.title} />
					</Content>
					<Content>
						<TextXL padding="1em 0 0 0">{title}</TextXL>
						<Filter article margin="0.75em 0">
							{category.map(item => (
								<Button
									article
									key={item}
									onClick={() =>
										navigateTo({
											pathname: `/blog`,
											state: item,
										})
									}
								>
									{item}
								</Button>
							))}
						</Filter>
						<TextS color={light}>{date}</TextS>
					</Content>
					{content &&
						content.map(block => (
							<div key={block.body ? block.body.id : block.image.id}>
								{block.body && (
									<Content key={block.body.id}>
										<TextM id="markdown">
											<ReactMarkdown source={block.body.body} />
										</TextM>
									</Content>
								)}
								{block.image && (
									<Content img key={block.image.id}>
										<Img sizes={block.image.sizes} alt={block.title} />
										<TextS center color={light} padding="1em 0">
											{block.image.description}
										</TextS>
									</Content>
								)}
							</div>
						))}
				</Wrapper>
			</div>
		)
	}
}

export default BlogPost

export const blogPostQuery = graphql`
	query blogPostPageQuery($id: String!) {
		allContentfulBlogPost(filter: { id: { eq: $id } }) {
			edges {
				node {
					id
					slug
					title
					date(formatString: "MMMM DD, YYYY")
					description {
						description
					}
					category
					previewImage {
						id
						title
						sizes {
							...GatsbyContentfulSizes_withWebp
						}
					}
					content {
						... on ContentfulContainer {
							content {
								... on ContentfulBlockText {
									body {
										id
										body
									}
								}
								... on ContentfulBlockImage {
									title
									image {
										id
										description
										sizes {
											...GatsbyContentfulSizes_withWebp
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
