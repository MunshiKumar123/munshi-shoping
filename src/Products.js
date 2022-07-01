import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    return (
        <>

            <div className="my-5">
                <h1 className="text-center">Products</h1>
            </div>

            {
                data.map((row) => {
                    return (
                        <div key={row.id} className="stu">
                            {row.title} <br />
                            <Link to={"/productdetail/" + row.id}>
                                <img src={row.image} width="150" alt={row.title} height="100px" /> <br />
                            </Link>
                            {row.price} <hr />
                        </div>
                    )
                })
            }


        </>
    );
}
export default Products;