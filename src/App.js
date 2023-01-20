import logo from './logo.svg';
import './App.css';
import{
  Router,
  BrowserRouter,
  Routes,
  Route,
}from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import AllBooks from './component/AllBooks';
import SearchBook from './component/SearchBook';
import Order from './component/Order';
import Allcategories from './component/Allcategories';
import OrderDetails from './component/OrderDetails';
import GetBook from './component/GetBook';
import SaveCustomer from './component/SaveCustomer';
import Review from './component/Review';
import ViewReview from './component/ViewReview';
import Logout from './component/Logout';
import Profile from './component/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}/>
        <Route path='Allbooks' element={<AllBooks/>}/>
        <Route path='/searchbook/:id' element={<SearchBook/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/Allcategories' element={<Allcategories/>}/>
        <Route path='/orderdetails' element={<OrderDetails/>}/>
        <Route path='/bookcategory/:name' element={<GetBook/>}/>
        <Route path='/SaveCustomer' element={<SaveCustomer/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/viewreview' element={<ViewReview/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
