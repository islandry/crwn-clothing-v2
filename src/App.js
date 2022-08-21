import {Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Auth from './routes/Auth/Auth.component';


const Shop = () =>{
  return <h1>I am the shop page!</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Navigation />}>
        <Route index element = {<Home/>} />
        <Route path ='shop' element = {<Shop/>} />
        <Route path = 'auth' element = {<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
