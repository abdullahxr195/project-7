import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useProducts } from "../../hooks/useProducts";
import Header from "../Layout/Header";
import { useNavigate } from "react-router-dom";
export default function ProductsList() {
  const navigate = useNavigate();
  const { products } = useProducts();
  console.log(products);
  return (
    <>
      <Header />
      <Typography>Product</Typography>
      <Container sx={{ my: 3 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid sx={{ p: 2, m: 2 }}>
              key = {product._id}
              <Card>
                <CardMedia
                  component={"img"}
                  src="https://i.pinimg.com/1200x/78/67/3a/78673a9eb989b8782c5e83b707d231f1.jpg"
                />
                <CardContent>
                  <Typography>{product.catId?.name}</Typography>
                  <Typography>${product.price}</Typography>
                  <Typography>{product.stock} left</Typography>
                  <Divider />
                  <Typography>
                    {product.descriprion || "no avilable descriprion"}
                  </Typography>
                </CardContent>
                <CardActions>Buy</CardActions>
                <CardActions onClick={() => handleViewProduct('/product/$(prdId)')}>View</CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
