import { Typography } from '@mui/material'
import useStyles from '../src/styles'

export default function Footer() {
	const classes = useStyles()
	return (
		<footer className={classes.footer}>
			<Typography>All rights reserved 2021.</Typography>
		</footer>
	)
}
