import Head from 'next/head'
import { Container } from '@mui/material'
import Header from '../components/Header'
import Footer from './Footer'
import useStyles from '../src/styles'

export default function Layout({ children, title, description }) {
	const classes = useStyles()

	return (
		<div>
			<Head>
				<title>{title ? `${title} - AboutMe` : 'AboutMe'}</title>
				{description && (
					<meta name='description' description={description} />
				)}
			</Head>
			<Header />

			<Container className={classes.main}>{children}</Container>

			<Footer />
		</div>
	)
}
