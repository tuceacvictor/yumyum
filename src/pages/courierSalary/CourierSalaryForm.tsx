import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {UserInput} from "./ICourierSalary";

interface Props {
    values: UserInput,
    setValues: (value: number, name: string) => void,
    resetValues: () => void,
    calculate: (values: UserInput) => void,
    children?: React.ReactNode,
}

const CourierSalaryForm: React.FC<Props> = ({values, setValues, resetValues, calculate}) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            flexDirection={'column'}
            noValidate
            display={'flex'}
            autoComplete="off"
            style={{
                padding: 10
            }}
        >
            <TextField
                autoFocus
                variant={"standard"}
                label="Ботаника"
                value={values['botanica']}
                name={'botanica'}
                type={"number"}
                onChange={e => {
                    setValues(Number(e.target.value), e.target.name)
                }}
            />
            <TextField
                variant={"standard"}
                label="Телецентр"
                value={values['telecentru']}
                name={'telecentru'}
                type={"number"}
                onChange={e => {
                    setValues(Number(e.target.value), e.target.name)
                }}
            />
            <TextField
                variant={"standard"}
                label="Другие"
                value={values['other']}
                name={'other'}
                type={"number"}
                onChange={e => {
                    setValues(Number(e.target.value), e.target.name)
                }}
            />
            <div>
                <Button onClick={() => calculate(values)}
                        size={"small"}
                        variant={"outlined"}
                >
                    Расчитать
                </Button>
                <Button onClick={resetValues}
                        style={{marginLeft: 5}}
                        size={"small"}
                        color={"secondary"}
                        variant={"outlined"}
                >
                    Сбросить
                </Button>
            </div>
        </Box>
    );
};
export default CourierSalaryForm;