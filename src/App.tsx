import React from 'react';
import {Container} from '@mui/material';
import {Routes, Route} from "react-router-dom";
import {Header} from './components';
import {CourierSalary} from "./pages";

import './App.css';
import {BrandingProvider} from "./utils/BrandingProvider";

function App() {
    return (
        <div>
            <BrandingProvider>
                <Header/>
                <Container maxWidth="xl">
                    <main className={'app__container'}>
                        <Routes>
                            <Route
                                path={'/'}
                                element={<CourierSalary/>}
                            />
                        </Routes>
                    </main>
                </Container>
            </BrandingProvider>
        </div>
    );
}

export default App;
