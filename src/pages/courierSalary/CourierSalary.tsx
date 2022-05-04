import React, {useState} from 'react';
import {Card, Grid} from "@mui/material";
import {CalculatedResult, UserInput} from "./ICourierSalary";
import CourierSalaryForm from "./CourierSalaryForm";
import CourierSalaryResult from "./CourierSalaryResult";

const CourierSalary: React.FC = () => {
    const [state, setState] = useState<UserInput>({botanica: 0, other: 0, telecentru: 0});
    const [calculated, setCalculated] = useState<CalculatedResult>({total: 0, rate: 0, fuel: 0})

    function setValues(value: number, name: string): void {
        setState(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    function calculate(dest: UserInput): void {
        const destinations = {
            botanica: dest.botanica * 30,
            telecentru: dest.telecentru * 40,
            other: dest.other * 50
        };
        const {other, telecentru, botanica} = destinations;
        const amount = botanica + telecentru + other + 180;

        function calcRate(amount: number): number {
            if (amount <= 900) {
                return 500;
            }

            if (amount < 1100) {
                return 600
            }

            if (amount < 1500) {
                return 700
            }
            return 0
        }

        function calcFuel(amount: number): number {
            if (amount <= 700) {
                return 200
            }

            if (amount < 900) {
                return amount - 500;
            }

            if (amount < 1100) {
                return amount - 600;
            }

            if (amount < 1500) {
                return amount - 700
            }

            return 0;

        }

        const rate = calcRate(amount);
        const fuel = calcFuel(amount);
        setCalculated({
            total: rate + fuel,
            rate,
            fuel
        })


    }

    function resetValues() {
        setState({botanica: 0, other: 0, telecentru: 0})
        setCalculated({total: 0, rate: 0, fuel: 0})
    }

    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <CourierSalaryForm
                        values={state}
                        setValues={setValues}
                        resetValues={resetValues}
                        calculate={calculate}
                    />
                </Grid>
                <Grid item xs={12} md={9} style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <CourierSalaryResult result={calculated}/>
                </Grid>
            </Grid>
        </Card>
    );
};

export default CourierSalary;