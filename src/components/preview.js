const image_base = 'https://bhotahiti-bucket.s3.ap-south-1.amazonaws.com';

export default function Preview({ title, image}){
    return(
        <div className="sticky-top col-12 p-0">
            <img className="prev-img img-responsive p-3 bg-white rounded-5" src={`${image_base}${image}`} alt={title}/>
            <div className="row m-0 mt-2 rounded-5 mt-2 bg-white">
               {[0,0,0].map((item, index)=> (
                   <img key={index} className="col-4 img-responsive p-2 rounded" src={`${image_base}${image}`} alt={title}/>
               ))
               }
            </div>
        </div>
    )
}