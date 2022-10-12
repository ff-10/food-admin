import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import products from "../../mocks/products/product.json"
import { MdDeleteForever } from 'react-icons/md';

console.log(products);

export default function ProductCard({ image, name, resturant, cost, id }) {

    // request to redux with ID and del this item from redux.


    return (
        <Card style={{ width: 196, marginRight: 40, marginBottom: 26 }}>
            <CardMedia
                component="img"
                alt="Product Image"
                height="158"
                image={products[0].image}
                style={{ padding: 10, objectFit: "cover", borderRadius: 25 }}
            />
            <CardContent>
                <Typography component="p" style={{ fontSize: 18, fontWeight: "bold", color: "#1E1E30", marginBottom: 5 }}>
                    {products[0].product_name}
                </Typography>

                <Typography style={{ fontSize: 14, color: "#8E8E93" }}>
                    {products[0].restaurant_name}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ color: "#00B2A9", marginLeft: 7 }}>${products[0].product_price}</p>

                <Button style={{ display: 'flex', justifyContent: 'flex-end' }}><MdDeleteForever style={{ color: "#EB5757", fontSize: 22 }} /></Button>
            </CardActions>
        </Card>
    );
}