import { LoginPage } from './components/pages/login-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    <Route element={<LoginPage />} path='/' />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
