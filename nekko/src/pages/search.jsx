// search.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav2 from './components/nav2';
import Header from './components/header';
import Footer from './components/footer';
import { Link, useLocation } from 'react-router-dom';
import './style/search.css';

function Search() {
  const location = useLocation().state;
  const [bags, setBags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesArray, setCategoriesArray] = useState([
    "Tote bag", "Shoulder Bag", "Backpack", "Handbag", "Wallet"
  ]);
  const [colorsArray, setColorsArray] = useState([
    "Blue", "Green", "Red", "Black", "White", "Purple", "Yellow", "Brown", "Gray", "Pink", 
    "Orange", "Magenta", "Teal"
  ]);
  const [priceRanges, setPriceRanges] = useState([
    "0-4999", "5000-10000", "10000-15000", "15000-20000", "20000-25000", "25000-30000", "30000-35000", 
    "35000-40000", "40000-45000", "45000-50000"
  ]);
  const [filters, setFilters] = useState({
    category:  '',
    color: '',
    priceRange: '',
    name: ''
  });
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => { 
    if (location) {
      setFilters(prevFilters => ({
        ...prevFilters,
        category: location
      }));
    }
  }, [location]);

  useEffect(() => {
    const fetchBags = async (pageNumber) => {
      // console.log(" state " + useLocation().state);
      let query = '/api/bag'; 

      if (filters.name || filters.category || filters.color || filters.priceRange) {
        query = '/search_api_query';
      }

      const bagsPerPage = 12; 
      const offset = (pageNumber - 1) * bagsPerPage;

      const params = new URLSearchParams(filters);
      params.append('page', pageNumber);
      params.append('limit', bagsPerPage);
      params.append('offset', offset);
      
      try {
        const response = await axios.get(`http://localhost:3001${query}?${params}`);
        setBags(response.data || []);
        setNumberOfPages(Math.ceil(response.data.totalBags / bagsPerPage)); 
      } catch (error) {
        console.error('Error fetching bags:', error);
      }
    };
    console.log('fetching');
    fetchBags(currentPage);
  }, [filters, currentPage]);

  const handleBagSearch = () => {
    const name = document.getElementById('searchName').value;
    setFilters({ ...filters, name });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const renderBags = () => {
    return bags.map((bag) => (
      <Link key={bag.BagID} to={`/bag/${bag.BagID}`} className="recommended-bag-container">
        <BagImage bagId={bag.BagID} defaultImage='path_to_default_image_if_image_not_found' className="img-container"/>
        <div className="bag-description-container">
          <div className="name">{bag.BagName}</div>
          <div className="category">{bag.BagCategory}</div>
          <div className="price">{`THB ${bag.BagPrice}`}</div>
        </div>
      </Link>
    ));
  };
  
  const BagImage = ({ bagId, defaultImage }) => {
    const [imageUrl, setImageUrl] = useState(defaultImage);
  
    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/image/${bagId}`);
          if (response.data[0] && response.data[0].image_data1) {
            setImageUrl(response.data[0].image_data1);
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      };
  
      fetchImage();
    }, [bagId]);
  
    return (
      <img
        src={imageUrl}
        alt={`Bag ${bagId}`}
        onError={(event) => { event.target.src = defaultImage; }}
      />
    );
  };
  
  return (
    <div>
      <Header />
      <Nav2 />
      <div className="page-container-search">
        <div className="header">
          <section className="bar">
            <div className="searchBox">
              <input type="text" placeholder="search" id="searchName" />
              <button onClick={handleBagSearch}>
                <img className="searchbutton" src="/assets/search.png" alt="Search" />
              </button>
            </div>
            <div>
            <select name="category" className="form-select" value = {useLocation().state || filters.category} onChange={handleFilterChange}>
                <option value="">Category</option>
                {categoriesArray.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <select name="color" className="form-select" onChange={handleFilterChange}>
                <option value="">Color</option>
                {colorsArray.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <div>
              <select name="priceRange" className="form-select" onChange={handleFilterChange}>
                <option value="">Price Range</option>
                {priceRanges.map(priceRange => (
                  <option key={priceRange} value={priceRange}>{priceRange}</option>
                ))}
              </select>
            </div>
          </section>
        </div>
        {/* Bag rendering */}
        <div className="bags-container recommended-container">
          {bags.length === 0 ? (
            <section className="noBagsFound-container">
              NO BAGS FOUND
            </section>
          ) : (
            renderBags()
          )}
        </div>
        {/* <div className="page-selector-container">
          <PageNavBlock currentPage={currentPage} numberOfPage={numberOfPages} setCurrentPage={setCurrentPage} />
        </div> */}
        <Footer />
      </div>
    </div>
  );
}

export default Search;


//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~