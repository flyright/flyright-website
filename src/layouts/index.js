import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import favicon from '../assets/favicon/favicon.ico'
import faviconApplePrecomposed from '../assets/favicon/apple-touch-icon-precomposed.png'
import faviconApple from '../assets/favicon/apple-touch-icon.png'
import favicon48 from '../assets/favicon/favicon-48x48.png'
import favicon32 from '../assets/favicon/favicon-32x32.png'
import favicon16 from '../assets/favicon/favicon-16x16.png'
import maskIcon from '../assets/favicon/safari-pinned-tab.svg'
import faviconMsTile from '../assets/favicon/mstile-144x144.png'
import shortcutIcon from '../assets/favicon/favicon.ico'

class Layout extends React.Component {
	render() {
		const { children } = this.props
		return (
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<html lang="en" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, viewport-fit=cover"
					/>
					<link
						rel="apple-touch-icon-precomposed"
						sizes="180x180"
						href={faviconApplePrecomposed}
					/>
					<link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
					<link rel="icon" type="image/png" sizes="48x48" href={favicon48} />
					<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
					<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
					<link rel="mask-icon" href={maskIcon} color="#8449ff" />
					<link rel="shortcut icon" href={shortcutIcon} />
					<meta
						name="msapplication-config"
						content={`../assets/favicon/browserconfig.xml`}
					/>
					<meta name="msapplication-TileImage" content={faviconMsTile} />
					<meta name="msapplication-TileColor" content="#2d89ef" />
					<meta name="theme-color" content="#ffffff" />
					<link
						href="https://fonts.googleapis.com/css?family=Barlow:400,500,600"
						rel="stylesheet"
					/>
					<noscript>
						This website requires Javascript to work properly. Please enable
						Javascript.
					</noscript>
				</Helmet>
				<Header />
				<div style={{ padding: '5rem 0 0 0' }}>{children()}</div>
				<Footer />
			</div>
		)
	}
}

export default Layout
