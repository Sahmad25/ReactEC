import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
const showResults = "Choose"
import Data from "../products.json"
import ProductCards from './ProductCards'
import  Pagination  from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [product, setProduct] = useState(Data)
// pagination
  // Get current products to display
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Number of products per page

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [selectedCategory, setSelectedCategory] = useState("All");
   // category based filtering
   const menuItems = [...new Set(Data.map((Val) => Val.category))];

   const filterItem = (curcat) => {
     const newItem = Data.filter((newVal) => {
       return newVal.category === curcat;
     });
     setSelectedCategory(curcat); 
     setProduct(newItem);
     
   };

    return (
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop" />
            {/*shop page*/}
            <div className='shop-page padding-tb'>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                {/* layout and title here*/}
                                <div className='shop-title d-flex flex-warp justify-content-between'>
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>

                                    </div>

                                </div>

                                <div>
                                    <ProductCards GridList={GridList} product={currentProducts} />
                                </div>
                               <Pagination
                               productsPerPage={productsPerPage}
                               totalProducts={product.length}
                               paginate={paginate}
                               activePage={currentPage}/>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Search products={product} GridList={GridList} />
                                <ShopCategory
                                filterItem={filterItem}
                                setItem={setProduct}
                                menuItems={menuItems}
                                setProducts={setProduct}
                                selectedCategory={selectedCategory }
                                />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Shop