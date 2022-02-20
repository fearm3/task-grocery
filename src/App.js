import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';
import './App.css';
import NotFound from './components/common/NotFound';
import Navi from './components/navi/Navi';
import AddOrUpdateProduct from './components/products/AddOrUpdateProduct';
import Dashboard from './components/root/Dashboard';

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/product' element={<Dashboard />} />
         
          <Route path='/saveproduct/:productId' element={<AddOrUpdateProduct />} />
          <Route path='/saveproduct' element={<AddOrUpdateProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
