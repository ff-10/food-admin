import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdDeleteForever } from 'react-icons/md';
import { useConfirmationDialog } from "../../provider/ConfirmModalProvider";

export default function ProductCard({ image, name, resturant, cost, id }) {
    // request to redux with ID and del this item from redux.

    const { getConfirmation } = useConfirmationDialog();


    async function deleteProduct(productID) {
        //working with Redux(Products side)
        const isConfirm = await getConfirmation();

        if (isConfirm) {
            console.log('item successfully deleted');
        }
    }




    return (
        <Card style={{ width: 196, height: 300, marginRight: 40, marginBottom: 26 }}>
            <CardMedia
                component="img"
                alt="Product Image"
                height="158"
                image={image}
                style={{ objectFit: "cover", borderTopRightRadius: 4, borderTopLeftRadius: 4 }}
            />
            <CardContent>
                <Typography component="p" style={{ fontSize: 18, fontWeight: "bold", color: "#1E1E30", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {name}
                </Typography>

                <Typography style={{ fontSize: 14, color: "#8E8E93" }}>
                    {resturant}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ color: "#00B2A9", marginLeft: 7 }}>{cost}$</p>

                <Button style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={() => deleteProduct(id)}><MdDeleteForever style={{ color: "#EB5757", fontSize: 22 }} /></Button>
            </CardActions>
        </Card>
    );
}