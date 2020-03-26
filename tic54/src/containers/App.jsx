import  React from 'react';
import '../assets/styles/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Carrusel from '../components/Carrusel';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Carruselitem from '../components/Carruselitem';

const App = () =>(
    <div className="App">
        <Header/>
            <Search/>
            <Categories>
            <Carrusel>
                <Carruselitem/>
           </Carrusel>
  
        </Categories>
    </div>
);

export default App;