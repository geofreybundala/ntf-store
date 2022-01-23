import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

export const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}
