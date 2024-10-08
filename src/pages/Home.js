import React, { useContext, useState } from 'react';
import Product from '../components/Product';
import { ProductContext } from '../contexts/ProductContext';
import Hero from '../components/Hero';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';


const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); 
  console.log(products);
//----------------Apply Dropdown--------------------
  const categories = Array.from(new Set(products.map((res) => res.category)));

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

// -----------------Search Feature --------------------
const filteredProducts = products.filter((product) => {
  const matchesCategory = selectedCategory
    ? product.category === selectedCategory.value
    : true;

  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});

    

  return (
    <div>
      <Hero />
      <div className="container mx-auto  mt-20 flex justify-between items-center shadow-none relative">
        <Select
          options={categoryOptions}
          isClearable
          placeholder="Select a category"
          onChange={(selectOption) => setSelectedCategory(selectOption)}
          value={selectedCategory}
        />
         <FaSearch className='absolute right-[40px]' />
        <input
          type="text"
          placeholder="Search products"
          className=" w-[30%] p-2 border border-gray-300 rounded-md"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
