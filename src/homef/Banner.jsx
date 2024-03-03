import React, {useState} from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title = (
    <h2>Search Your One From <span>Thousend </span> Of Product</h2>
)
 const desc ="The Shop Cart"
// bannerList 

const bannerList = [
{
iconName: "icofont-users-alt-4",
text: "1.5 Million Customers",
},
{
iconName: "icofont-notification",
text: "More then 2000 Marchent",
},
{
iconName: "icofont-globe",
text: "Buy Anything Online",
},
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setfilterdProducts] = useState(productData);
  //search func
  const handleSearch = e => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm)
    //filtering product base on search 
    const filterd= productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setfilterdProducts(filterd);
  }
  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                <form>
                  <SelectedCategory seLect={"all"}/>
                  <input type= "text" name="search" id="search" placeholder="Search your product" value={searchInput}
                  onChange={handleSearch} />
                  <button type="submit">
                  <i className="icofont-search"></i>
                  </button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                 {
                  searchInput && filteredProducts.map((product,i) => <li key={i}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>)
                 }

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner