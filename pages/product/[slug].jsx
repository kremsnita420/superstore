import NextLink from 'next/link'
import Image from 'next/image'
import {
	Link,
	Grid,
	List,
	ListItem,
	Typography,
	Card,
	Button,
} from '@mui/material'
import { useRouter } from 'next/router'
import data from '../../src/data'
import Layout from '../../components/Layout'
import useStyles from '../../src/styles'

export default function ProductPage() {
	const classes = useStyles()
	const router = useRouter()
	// get slug parameter
	const { slug } = router.query
	// filter products to match slug
	const product = data.products.find((item) => item.slug === slug)

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<Layout title={product.name} description={product.description}>
			<div className={classes.section}>
				<NextLink href='/' passHref>
					<Link>
						<Typography>back to products</Typography>
					</Link>
				</NextLink>
			</div>

			<Grid container spacing={1}>
				<Grid item xs={12} md={6}>
					<Image
						src={product.image}
						alt={product.name}
						width={640}
						height={640}
						layout='responsive'
					/>
				</Grid>

				<Grid item xs={12} md={3}>
					<List>
						<ListItem>
							<Typography variant='h1'>{product.name}</Typography>
						</ListItem>
						<ListItem>
							<Typography>
								Category: {product.category}
							</Typography>
						</ListItem>
						<ListItem>
							<Typography>Brand: {product.brand}</Typography>
						</ListItem>
						<ListItem>
							<Typography>
								Rating: {product.rating} stars (
								{product.numReviews} reviews)
							</Typography>
						</ListItem>
						<ListItem>
							<Typography>
								Description: {product.description}
							</Typography>
						</ListItem>
					</List>
				</Grid>

				<Grid item xs={12} md={3}>
					<Card>
						<List>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Price</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography>
											{product.price} €
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Stock</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography>
											{product.countInStock > 0
												? `${product.countInStock} pieces`
												: 'Unavailable'}
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Button
									fullWidth
									variant='contained'
									color='primary'
								>
									Add to cart
								</Button>
							</ListItem>
						</List>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	)
}
