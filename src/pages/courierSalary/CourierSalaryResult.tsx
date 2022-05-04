import React from 'react';
import {Box, Table, TableBody, TableCell, TableRow, TableContainer, Paper} from "@mui/material";
import {CalculatedResult} from "./ICourierSalary";

interface Props {
    result: CalculatedResult
}

const CourierSalaryResult: React.FC<Props> = ({result}) => {
    return (
        <Box
            style={{
                padding: 10,
                width: '100%'
            }}
        >
            <TableContainer component={Paper}>
            <Table style={{width: '100%'}}>
                <TableBody>
                    <TableRow>
                        <TableCell style={{width: 120}}>
                            Ставка
                        </TableCell>
                        <TableCell>
                            {result.rate}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{width: 120}}>
                            Топливо
                        </TableCell>
                        <TableCell>
                            {result.fuel}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{width: 120}}>
                            <b>Итого</b>
                        </TableCell>
                        <TableCell>
                            <b>{result.total}</b>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </Box>
    );
};

export default CourierSalaryResult;