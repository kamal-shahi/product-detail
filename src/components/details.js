import { useState } from "react";
import Button from "./button";
import Tabs from "./tabs";
import Variation from "./variation";

const staticTitles = ['SKU', 'Category', 'Stock', 'Store']

export default function Details({product}){
    const { title, productType, isBulkBuyOpt, haveVariation, variation, description, price } = product;
    const [ amount, setAmount ] = useState(!haveVariation ? price[0].price : (variation && variation.combination[0] && variation.combination[0].price[0].price));
    const [ originalAmount, setOriginalAmount ] = useState(!haveVariation ? price[0].price : (variation && variation.combination[0] && variation.combination[0].price[0].price));
    const [ quantity, setQuantity ] = useState(!haveVariation ? price[0].quantity : (variation && variation.combination[0] && variation.combination[0].price[0].quantity));
    const [ variations, setVariation ] = useState(variation);
    const onIncDec = (type)=> {
            switch (type) {
            case 'inc':
                if(quantity.from < quantity.to){
                    setQuantity({...quantity, from: quantity.from + 1});
                    handleAmount(quantity.from + 1);
                }
                break;
            case 'dec':
                if(quantity.from > 1){
                  setQuantity({...quantity, from: quantity.from - 1})
                  handleAmount(quantity.from - 1);
                }
                break;
            default:
                setQuantity({...quantity})
                break;
           }
    };

    const handleAmount = (multiple)=> {
        setAmount({ USD: parseInt(originalAmount.USD) * multiple, NRS: parseInt(originalAmount.NRS) * multiple})
    }

    return(
        <div className="col-12 details">
            <h1 className="title">{title} </h1>
            <section className="row m-0">
                <div className="ratings col-3 p-0">
                    {[0,0,0,0,0].map((item, index)=> (
                        <span className={`fa fa-star${index==4 ?'-o':''} rating-color`} key={index}/>
                    ))
                    }
                </div>
                <div className="col p-0">
                    <p>(100 customers reviews)</p>
                </div>
            </section>
            <div className="p-description mt-4">
                <p>{description}</p>
            </div>
            <div className="row spec-detail m-0 mt-4">
                <div className="col-3 pl-0">
                    {staticTitles.map((title, index)=> {
                        return(
                            <p key={index}>{title}:</p>
                        )
                    })
                    }
                </div>
                <div className="col-3 pl-0">
                    <p>574389</p>
                    <p>{productType}</p>
                    <p className="text-primary">{isBulkBuyOpt ? 'In Stock' : 'Unavailable'}</p>
                    <p>vintage parts</p>
                </div>
            </div>
            <div className="row button-card bg-white rounded-5 p-3 m-0 mt-4">
                <div className="col-4 pl-0">
                    <p className="text-danger mb-1">
                         {amount.USD} USD
                        {/* {!haveVariation ? price[0].price.USD : (variation && variation.combination[0] && variation.combination[0].price[0].price.USD)} USD */}
                    </p>
                   <p className="text-secondary mb-0 line-through"><del>5.00 USD</del></p>
                </div>
                 <div className="col-3 rounded-5 border bg-light p-2">
                   <Button onClick={()=> onIncDec('inc')} content="+" className="btn fs-20 btn-default"/>
                   <Button content={quantity.from} className="btn btn-default quantity-value"/>
                   <Button onClick={()=> onIncDec('dec')} content="-" className="btn fs-20 btn-default"/>
                </div>
                  <Button content={'Add to cart'} className="add-cart-btn col ml-2 btn text-center btn-default text-white bg-dark-blue rounded-5" Icon={<span className="fa fa-plus mr-2"/>}/>
            </div>
            <div className="row m-0 mt-3">
                 <Button content={'Add to my wish list'} className="rounded-5 p-3 btn text-center btn-default bg-white" Icon={<span className="fa fa-heart-o text-danger mr-2"/>}/>
                 <Button content={'Add to my wish list'} className="rounded-5 p-3 ml-4 btn text-center btn-default bg-white" Icon={<span className="fa fa-plug text-danger mr-2"/>}/>
            </div>
            {product && product.variation && <div className="row m-0 mt-3 mb-4">
                <Variation variations={variations.levelName} image={product.media[0]}/>
            </div>}
            <div className="row m-0 mt-5 mb-4">
                <Tabs/>
            </div>
        </div>
    )
}