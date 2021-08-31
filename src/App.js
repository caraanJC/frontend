import './scss/main.scss';
import { useSelector, useDispatch } from 'react-redux';

import DisplayAddForm from './components/DisplayAddForm';
import DisplayProduct from './components/DisplayProducts';
import Cart from './components/Cart';
import Login from './components/Login';

// import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const displayNavbar = useSelector((state) => state.displayNavbar);
  const displayModal = useSelector((state) => state.displayModal);
  const dispatch = useDispatch();
  const body = document.querySelector('body');
  if (displayModal) {
    body.classList.add('overflow');
  } else {
    body.classList.remove('overflow');
  }

  useEffect(() => {
    // const populate = async () => {
    //   await axios.post('http://localhost:5000/items', {
    //     name: 'Burger',
    //     price: 50,
    //     category: 'Food',
    //     qty: 1,
    //     description: '',
    //     image: 'https://image.flaticon.com/icons/svg/1046/1046784.svg',
    //   });
    //   await axios.post('http://localhost:5000/items', {
    //     name: 'Pizza',
    //     price: 100,
    //     category: 'Food',
    //     qty: 1,
    //     description: '',
    //     image: 'https://image.flaticon.com/icons/svg/1046/1046771.svg',
    //   });
    //   await axios.post('http://localhost:5000/items', {
    //     name: 'Fries',
    //     price: 25,
    //     category: 'Food',
    //     qty: 1,
    //     description: '',
    //     image: 'https://image.flaticon.com/icons/svg/1046/1046786.svg',
    //   });
    //   await axios.post('http://localhost:5000/items', {
    //     name: 'Coffee',
    //     price: 35,
    //     category: 'Drinks',
    //     qty: 1,
    //     description: '',
    //     image: 'https://image.flaticon.com/icons/svg/1046/1046785.svg',
    //   });
    //   await axios.post('http://localhost:5000/items', {
    //     name: 'Iced Tea',
    //     price: 45,
    //     category: 'Drinks',
    //     qty: 1,
    //     description: '',
    //     image: 'https://image.flaticon.com/icons/svg/1046/1046782.svg',
    //   });
    //   await axios.post('http://localhost:5000/items', {
    //     name: 'Hot Tea',
    //     price: 45,
    //     category: 'Drinks',
    //     qty: 1,
    //     description: '',
    //     image: 'https://image.flaticon.com/icons/svg/1046/1046792.svg',
    //   });
    // };
    // populate();
    const initFrontEnd = async () => {
      await axios.get('http://localhost:5000/items').then((res) => {
        dispatch({ type: 'INIT_PRODUCTS', payload: res.data });
      });
    };
    initFrontEnd();

    //eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <Router>
        <nav className='nav'>
          <h1>Pizza at iba pa</h1>
          <div className={displayNavbar ? 'nav__links active' : 'nav__links'}>
            <div className='links'>
              <Link
                className='link'
                to='/'
                onClick={() => dispatch({ type: 'DISPLAY_NAVBAR' })}
              >
                Products
              </Link>
              <Link
                className='link'
                to='/form'
                onClick={() => dispatch({ type: 'DISPLAY_NAVBAR' })}
              >
                Add Product
              </Link>
              <Link
                className='link'
                to='/cart'
                onClick={() => dispatch({ type: 'DISPLAY_NAVBAR' })}
              >
                Cart
              </Link>
            </div>
          </div>
          <div
            className='nav__burger'
            onClick={() => dispatch({ type: 'DISPLAY_NAVBAR' })}
          >
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </nav>
        <Route exact path='/' component={DisplayProduct} />
        <Route path='/cart' component={Cart} />

        {/* user.isAdmin && */}
        <Route path='/form' component={DisplayAddForm} />
      </Router>

      <Login />
    </div>
  );
};

export default App;
