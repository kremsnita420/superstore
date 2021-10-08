import Head from 'next/head'
import { Container } from '@mui/material'
import Header from '../components/Header'
import Footer from './Footer'
import useStyles from '../src/styles'

export default function Layout({ children }) {
	const classes = useStyles()

	return (
		<div>
			<Head>
				<title>Superstore</title>
			</Head>
			<Header />

			<Container className={classes.main}>{children}</Container>

			<Footer />
		</div>
	)
}
