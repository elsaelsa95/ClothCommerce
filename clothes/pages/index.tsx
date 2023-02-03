import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Inter } from '@next/font/google'
import Layout from "./../components/Layout"
import data from "../utils/data"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.id}>
              <Card sx={{ width: 300, height: 400, justifyContent: "center" }}>
                <Link href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                      sx={{ width: 300, height: 300 }}>
                    </CardMedia>
                    <CardContent>
                      <Typography> {product.name} </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions>
                  <Typography>$ {product.price}</Typography>
                  <Button size="small" color="primary"> Add to Chart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
