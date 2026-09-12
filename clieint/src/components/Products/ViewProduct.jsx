import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Header from "../Layout/Header";

export default function ViewProduct() {
  const { productId } = useParams();

  const { product, fetchProductById } = useProducts();
  useEffect(() => {
    fetchProductById(productId);
  }, [productId]);
  console.log(product);
  return (
    <>
    <Header/>
      <Card>
        <CardMedia
          component={"img"}
          src="https://i.pinimg.com/736x/e0/3d/e3/e03de3eb9e6b8e6ead7f307afad4f00e.jpg"
        ></CardMedia>

        <CardContent>
          <Typography>{product.name}</Typography>
          <Typography>{product.catId?.name}</Typography>
          <Typography>{product.catId?.descriprion}</Typography>
          <Typography>${product.price}</Typography>
          <Typography>{product.stock} left</Typography>
          <Divider />
          <Typography>
            {" "}
            {product.descriprion || "no avilable descriprion"}
          </Typography>
        </CardContent>

        <CardActions>
          <Button>Buy</Button>
        </CardActions>
      </Card>
    </>
  );
}
