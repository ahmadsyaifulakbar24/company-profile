import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.down('md')] : {
            marginBottom: theme.spacing(3)
        }
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
}))
const ImageComponent = (props) => {
    const classes = useStyles()
    return (
        <Box>
            <Container>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid
                        item
                        lg={4}
                        xs={12}
                    >
                        <img 
                        className={classes.image}
                            src={`${props.image_url}about.png`} 
                            alt="" 
                        />
                    </Grid>

                    <Grid
                        container
                        lg={7}
                        xs={12}
                    >
                        <Grid item>
                            <Typography 
                                className={classes.titleContent}
                                variant="h4"
                                color="primary"
                            >
                              Membantu Perkembangan Bisnis Klien Melalui Solusi Digital Yang Inovatif
                            </Typography>

                            <Typography
                                className={classes.subTitle}
                                variant="subtitle1"
                            >
                                Sesuai dengan visi kami, kami selalu berusaha untuk mengembangkan aplikasi web dan mobile inovatif yang disukai pengguna dan dapat memajukan bisnis klien. Dengan lebih dari 10 tahun pengalaman dalam bidang pengembangan aplikasi, kami menyediakan servis komprehensif untuk produk digital Anda:
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
const mapStatToProps = (state) => {
    return {
        image_url: state.image_url
    }
}
export default  connect(mapStatToProps, null) (ImageComponent)