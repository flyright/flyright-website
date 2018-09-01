import React from 'react'
import styled from 'styled-components'
import media from '../utils/media.js'
import TextS from './textS'
import Column from './column'
import LinkExternal from './linkExternal'
import LinkInternal from './linkInternal'
import NotificationBar from './notificationBar'
import { white } from '../utils/colors'

const Notification = props => {
	const item = props

	return (
		<div>
			{item.isExternal ? (
				<LinkExternal href={item.slug} target="_blank" rel="noopener">
					<NotificationBar>
						<TextS medium color={white} padding="0 0 2px 0">
							{item.text}
						</TextS>
					</NotificationBar>
				</LinkExternal>
			) : (
				<LinkInternal to={item.slug}>
					<NotificationBar>
						<TextS medium color={white} padding="0 0 2px 0">
							{item.text}
						</TextS>
					</NotificationBar>
				</LinkInternal>
			)}
		</div>
	)
}

export default Notification
