import './App.css';
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Layout from './Mylayout/Layout';
import Products from './Mylayout/Products';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={ <Products/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
