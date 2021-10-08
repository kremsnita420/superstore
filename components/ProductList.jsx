import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material'
import data from '../src/data'

export default function ProductList() {
	return (
		<Grid container spacing={3}>
			{data.products.map((product, index) => (
				<Grid item sm={6} md={4} key={index}>
					<Card>
						<CardActionArea>
							<CardMedia
								component='img'
								image={product.image}
								title={product.name}
							/>

							<CardContent>
								<Typography>{product.name}</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Typography>{product.price} €</Typography>
							<Button size='small' color='primary'>
								Add To Cart
							</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}
