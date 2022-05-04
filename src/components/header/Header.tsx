import React from 'react';
import {
    AppBar,
    Container,
    Toolbar,
    useTheme,
    Theme, Button,
} from "@mui/material";
import {makeStyles, createStyles} from '@mui/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {toggleTheme} from "../../app/app.slice";
import {useAppDispatch} from "../../app/hooks";
import logo from './yumyum-logo.png.webp';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBarSticky: {
        transition: 'top 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backdropFilter: 'blur(20px)',
        background: theme.palette.mode === 'dark' ?
            'rgba(10, 25, 41, 0.72)' :
            'rgba(255, 255, 255, 0.72)',
        boxShadow: theme.palette.mode === 'dark' ?
            'rgb(19 47 76) 0px -1px 1px inset' :
            'rgb(231 235 240) 0px -1px 1px inset'
    },
}))
const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    return (
        <AppBar position={"sticky"} color={"transparent"}
                classes={{positionSticky: classes.appBarSticky}}>
            <Container maxWidth="xl">
                <Toolbar>
                    <div style={{flexGrow: 1,display: 'flex'}}>
                        <img src={logo} alt={'logo'} width={150}/>
                    </div>

                    <Button variant={"outlined"}
                            size={"small"}
                            style={{minWidth: 34, minHeight: 34}}
                            onClick={() => dispatch(toggleTheme())}
                    >
                        {theme.palette.mode === 'dark' ?
                            <LightModeIcon fontSize={"small"}/> :
                            <DarkModeIcon fontSize={"small"}/>
                        }
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;