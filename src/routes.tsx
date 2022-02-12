import { Routes, Route } from 'react-router-dom';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Register from './pages/Register';

export const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forget-password" element={<ChangePassword/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}
