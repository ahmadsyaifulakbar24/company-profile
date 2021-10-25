import { Box, Container, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import CardProduct from "./CardProduct/CardProduct";

const styles = theme => ({
    root: {
        marginTop: theme.spacing(7)
    },
    title: {
        fontWeight: 500,
        marginBottom: theme.spacing(3)
    }
})
class Product extends Component
{
    productItems = [
        {
            'image' : '/assets/images/product/product1.jpg',
            'title': 'Restourant Web'
        },
        {
            'image' : '/assets/images/product/product2.jpg',
            'title': 'Mobile Apps'
        },
        {
            'image' : '/assets/images/product/product3.jpg',
            'title': 'Restourant'
        },
        {
            'image' : '/assets/images/product/product1.jpg',
            'title': 'Restourant Web'
        },
        {
            'image' : '/assets/images/product/product2.jpg',
            'title': 'Mobile Apps'
        },
        {
            'image' : '/assets/images/product/product3.jpg',
            'title': 'Restourant'
        },
        {
            'image' : '/assets/images/product/product1.jpg',
            'title': 'Restourant Web'
        },
        {
            'image' : '/assets/images/product/product2.jpg',
            'title': 'Mobile Apps'
        },
        {
            'image' : '/assets/images/product/product3.jpg',
            'title': 'Restourant'
        },
        {
            'image' : '/assets/images/product/product1.jpg',
            'title': 'Restourant Web'
        },
        {
            'image' : '/assets/images/product/product2.jpg',
            'title': 'Mobile Apps'
        },
        {
            'image' : '/assets/images/product/product3.jpg',
            'title': 'Restourant'
        },
    ]
    render() {   
        const { classes } = this.props
        return (
            <Box >
                <Container className={classes.root} >
                    <Typography 
                        className={classes.title}
                        variant="h4"
                        color="primary"
                    >
                        Product
                    </Typography>
                    <Grid
                        container 
                        spacing={5}
                    >
                        { this.productItems.map((item, index) => {
                            return (
                                <Grid
                                    item
                                    key={index}
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                    spacing={3}
                                >
                                    <CardProduct 
                                        data={item}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        )
    }
}

export default withStyles(styles, {withTheme: true}) (Product)