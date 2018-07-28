import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import SocialBlog from './socialBlog'
import SocialTwitter from './socialTwitter'
import SocialProductHunt from './socialProductHunt'
import Column from './column'
import LinkInternal from './linkInternal'
import LinkExternal from './linkExternal'
import TextL from './textL'

import { blog, twitter, productHunt } from '../utils/links'

const Social = props => (
	<Item>
		<Column padding="1em">
			<LinkInternal to={blog}>
				<SocialBlog />
				<TextL center smaller medium padding="0.5em 0">
					Blog
				</TextL>
			</LinkInternal>
		</Column>
		<Column padding="1em">
			<LinkExternal href={twitter} target="_blank" rel="noopener">
				<SocialTwitter />
				<TextL center smaller medium padding="0.5em 0">
					Twitter
				</TextL>
			</LinkExternal>
		</Column>
		<Column padding="1em">
			<LinkExternal href={productHunt} target="_blank" rel="noopener">
				<SocialProductHunt />
				<TextL center smaller medium padding="0.5em 0">
					Product Hunt
				</TextL>
			</LinkExternal>
		</Column>
	</Item>
)

const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em 0;

	${media.tab`
		flex-direction: row;
	`};
`

export default Social
