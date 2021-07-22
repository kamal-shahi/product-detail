import Button from "./button";

const image_base = 'https://bhotahiti-bucket.s3.ap-south-1.amazonaws.com';

export default function Variation({variations, image}){
    console.log(variations);
    return(
        <div className="col-12 p-3 rounded-5 bg-white">
                {variations.map((item, index)=> {
                    return(
                        <div className={`row m-0 ${index > 0 ? 'mt-4': ''}`}>
                            <section className="col-2 p-0">
                                <label className="text-secondary">{item.title}</label>   
                            </section> 
                            <section className="col-9 d-flex">
                                {
                                    item.values.map((value, index)=> {
                                        return(
                                          item.title =='Color' ? 
                                            <img width="60px" key={index} height="70px" title={value.title} className="mr-2 p-2 border border-secondary rounded" key={index} src={`${image_base}${image}`}/>
                                          :
                                            <Button content={value.title} className="text-secondary border-dotted px-2 mr-2 bg-white py-1"/>
                                        )
                                    })
                                }
                            </section>  
                        </div>
                    )
                })
                }
               {/* <div className="row m-0 mt-4">
                    <section className="col-2 p-0">
                         <label className="text-secondary">Storage</label>   
                    </section> 
                    <section className="col-9 d-flex">
                          <Button content="6gb" className="text-secondary border-dotted px-2 py-1 mr-3"/>
                          <Button content="128gb" className="text-secondary border-dotted px-2 py-1"/>
                    </section>  
              </div>
              <div className="row m-0 mt-4">
                    <section className="col-2 p-0">
                         <label className="text-secondary">RAM</label>   
                    </section> 
                    <section className="col-9 d-flex">
                          <Button content="6gb" className="text-secondary border-dotted px-2 py-1 mr-3"/>
                          <Button content="4gb" className="text-secondary border-dotted px-2 py-1 mr-3"/>
                          <Button content="6gb" className="text-secondary border-dotted px-2 py-1"/>
                    </section>  
             </div> */}
        </div>
    )
}
