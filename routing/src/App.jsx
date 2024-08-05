import {  Route, Switch } from 'react-router-dom';
import './App.css'
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';


function App() {


    return (
   <div>
      <MainHeader />
     <main>
      <Switch>
      <Route path="/welcome">
       <Welcome />
     </Route>
     <Route path="/product" exact>
        <Product />
     </Route> 
     <Route path = "/product/:productId">
       <ProductDetail />
     </Route>
      </Switch>
  
     </main>


   </div>
  )
}

export default App
