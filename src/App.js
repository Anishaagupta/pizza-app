import './App.css';
import Main from './components/Main';
import { GlobalStyle } from './globalStyledComp';
import { productsData , productDataTwo} from './components/Products/data';
import Products from './components/Products/index';
import AppRouter from './route';
import Feature from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
     <AppRouter/>
     <GlobalStyle/>
      <Main />
      <Products heading="Choose Your Favorite" data={productsData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer/>
    </div>
  );
}

export default App;
