import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import Img from 'gatsby-image'
import TextL from './textL'
import TextM from './textM'
import TextS from './textS'
import Block from './block'
import Link from 'gatsby-link'
import { light, white } from '../utils/colors'

const Card = props => {
	const post = props.post.node

	return (
		<Container to={`/blog/${post.slug}`} key={post.id}>
			<Block width="100%">
				<Img
					sizes={post.previewImage.sizes}
					alt={post.previewImage.title}
					style={{ borderRadius: '7px 7px 0 0' }}
				/>
			</Block>
			<Block padding="2em">
				<TextL>{post.title}</TextL>
				<TextM padding="0.75em 0" style={{ fontSize: '18px', lineHeight: '30px' }}>
					{post.description.description}
				</TextM>
				<TextS color={light}>{post.date}</TextS>
			</Block>
		</Container>
	)
}

const Container = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1em;
	text-decoration: none;
	background-color: ${white};
	box-shadow: 0 1px 3px rgba(2, 8, 54, 0), 0 1px 7px rgba(2, 8, 54, 0.1);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	border-radius: 10px;
	cursor: pointer;

	&:hover {
		box-shadow: 0 14px 28px rgba(2, 8, 54, 0.1), 0 10px 10px rgba(2, 8, 54, 0.1);
	}

	${media.tab`
		max-width: 300px;
	`};
`

export default Card
