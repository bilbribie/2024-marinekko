import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import OurTeam from './pages/ourteam';
import Search from './pages/search';
import AccountManage from './pages/accountmanage';
import ProductManage from './pages/productmanage';
import AddAdmin from './pages/addadmin';
import AddProduct from './pages/addproduct';
import EditAdmin from './pages/editadmin';
import EditProduct from './pages/editproduct';
import Bag from './pages/bag';




function App() {

  return (
    <Router>
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/search" element={<Search />} />
          <Route path="/accountmanage" element={<AccountManage />} />
          <Route path="/productmanage" element={<ProductManage />} />
          <Route path="/addadmin" element={<AddAdmin />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editadmin" element={<EditAdmin />} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/bag" element={<Bag />} />

      </Routes>
    </Router>
  );

}


export default App;
