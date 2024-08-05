import { Link } from 'react-router-dom';

const Product = () => {
    return( 
        <section>
           <h1 className=" bg-green-600 flex space-x-4 ">The Product Page</h1> 
     <ul className='bg-yellow-600'>
        <li> <Link to ='/product/p1'> A BOOK  </Link> </li>
        <li>  <Link to ='/product/p2'> A Carpet </Link> </li>
        <li>  <Link  to ='/product/p3'> A online course </Link> </li>
     </ul>
        </section>
      
    )
    
   
}

export default Product ; 