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
import Header from "../Layout/Header";
import { useCategories } from "../../hooks/useCategories";

export default function DisplayCategories() {
  const { categories } = useCategories();
  return (
    <>
      <Header />
      <Typography>Category</Typography>
      <Container sx={{ my: 3 }}>
        <Grid container spacing={4}>
          {categories.map((cat) => (
            <Grid sx={{ p: 2, m: 2 }}>
              key ={cat._id}
              <Card>
                <CardMedia
                  component={"img"}
                  src="https://i.pinimg.com/1200x/78/67/3a/78673a9eb989b8782c5e83b707d231f1.jpg"
                />
                <CardContent>
                  <Typography>{cat.name}</Typography>
                  <Divider />
                  <Typography>
                    {cat.descriprion || "no avilable description"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>View</Button>
                  <Button>View Product</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
