import { useState,} from 'react'
import  Navbar from './assets/components/Navbar'
import './App.css'
import ProductList from './assets/components/ProductList';


function App() {

  return (
    <>
    <h2>lista de productos</h2>
    <Navbar/>
   
    <Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
 );
  
}

export default App


