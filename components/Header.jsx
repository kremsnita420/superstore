import NextLink from 'next/link'
import useStyles from '../src/styles'
import { AppBar, createTheme, Link, Toolbar, Typography } from '@mui/material'
import { useContext } from 'react'
import { Store } from '../src/Store'

export default function Header() {
	const classes = useStyles()

	return (
		<AppBar position='static' className={classes.navbar}>
			<Toolbar>
				<NextLink href='/' passHref>
					<Link>
						<Typography className={classes.brand}>
							About*me
						</Typography>
					</Link>
				</NextLink>
				{/* push links to left and right with this div */}
				<div className={classes.grow}></div>

				<div>
					<NextLink href='/cart' passHref>
						<Link>Cart</Link>
					</NextLink>
					<NextLink href='/login' passHref>
						<Link>Login</Link>
					</NextLink>
				</div>
			</Toolbar>
		</AppBar>
	)
}
