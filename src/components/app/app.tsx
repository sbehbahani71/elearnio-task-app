import { FC } from 'react';
import { LoginPageComponent } from '../pages/login/login-page.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CalculatorPageComponent } from '../pages/calculator/calculator-page.component';

export const App: FC = () => {
    return (
        <>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    <Route element={<LoginPageComponent />} path='/' />
                    <Route
                        element={<CalculatorPageComponent />}
                        path='/calculator-page'
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};
