import NextLink from 'next/link'
import useStyles from '../src/styles'
import { AppBar, Link, Toolbar, Typography } from '@mui/material'

export default function Header() {
	const classes = useStyles()

	return (
		<AppBar position='static' className={classes.navbar}>
			<Toolbar>
				<NextLink href='/' passHref>
					<Link>
						<Typography className={classes.brand}>
							Superstore
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
