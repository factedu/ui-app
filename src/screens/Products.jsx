import * as React from 'react';
import { useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { getAllProducts } from "./../services/products";


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product_name', headerName: 'Name', width: 130 },
    { field: 'Product_description', headerName: 'Description', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'offer_price', headerName: 'Offer Price', width: 130 },
    { field: 'offer_start_at', headerName: 'Offer Start Time', width: 180 },
    { field: 'offer_end_at', headerName: 'Offer End Time', width: 180 },
    // {
    //     field: 'price',
    //     headerName: 'Price',
    //     type: 'string',
    //     width: 90,
    // },
    // {
    //     field: 'offer_price',
    //     headerName: 'Offer Price',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `$ ${params.getValue('offer_price') || ''}`,
    // },
];

export default function Products(params) {



    useEffect(() => {
        getProducts();
    }, []);

    const [cols, setCols] = useState(columns);
    const [rows, setRows] = useState([]);
    
    const getProducts = () => {
        return getAllProducts().then(res => {
            console.log(res);
            setRows(res.data);
        })
    }

    return (
        <Card>
            <CardContent>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={cols} pageSize={5} checkboxSelection />
                </div>
            </CardContent>
        </Card>

    );
}