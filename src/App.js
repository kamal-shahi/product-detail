import { useEffect, useState } from "react";
import { fetchSingleProduct } from "./components/api";
import './style.css';
import Loader from "./components/loader";
import Preview from "./components/preview";
import Details from "./components/details";

function App() {
  const [ loading, setLoading ] = useState(true); //loading handler state 
  const [ product, setProduct ] = useState({}); //product detail state


  //requesting to api
  const getProduct = async()=> {
    const { error, data } = await fetchSingleProduct();
    setLoading(false);
    const isValidate = (!error && data);
    if(isValidate) setProduct(data)
    else {
      // can set error handler state here
      setProduct({})
    }
  }

  //initial loader
  useEffect(()=> {
    getProduct();

    return()=> {
        //clear all the states here
    }
  }, []);

  const isReady = !(loading && product);

  // console.log(product);

  return (
     <main className="container-fluid p-0" style={{background: '#ececec'}}>
       <BreadCrumb/>
       {isReady ? <div className="mt-3 p-2 container">
          <div className="row m-0">
            <section className="col-5 p-0">
              {product.brand && <Preview image={product.media[0]} title={product.brand.title}/>}
            </section>
            <section className="col-7">
               {product && product.variation && <Details product={product}/>}
            </section>
          </div>
       </div> : 
           <Loader/>
        }
     </main>
  );
}


const BreadCrumb = ()=> {
  return(
    <header className="col-12 px-4 py-3 text-primary sticky-top z-index-max" style={{backgroundColor: '#e0e0e0'}}>
      <a>Products  </a> 
      <span className="mx-2">{'>'}</span>
      <a className="">Product name </a> 
    </header>
  )
}

export default App;
