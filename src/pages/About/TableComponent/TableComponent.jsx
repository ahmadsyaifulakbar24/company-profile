import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow,
    Paper, 
    Container,
    Box,
    Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(3)
    },
    table: {
        minWidth: 650,
    },
}));

const createData = (name, totalProject, rating)  => {
    return { name, totalProject, rating };
}

const rows = [
    createData('Android', 159, 4.9),
    createData('Website', 237, 5.0),
    createData('Desktop', 262, 4.5),
    createData('IOS', 305, 4.7),
];

const TableComponent = () => {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
        >
            <Container>
                <Typography
                    className={classes.title}
                    variant="h4"
                    color="primary"
                >
                    Portofolio Kami
                </Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Jenis</TableCell>
                                <TableCell align="center">Total Project</TableCell>
                                <TableCell align="center">rating&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.totalProject}</TableCell>
                                    <TableCell align="center">{row.rating}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}
export default TableComponent