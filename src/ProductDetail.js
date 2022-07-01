import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const [data, setData] = useState([]);
    const { n } = useParams();
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + n)
            .then((response) => {
                // console.log(response.data);
                const dt = [...data];
                dt.push(response.data);
                setData(dt);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    return (
        <>

            {
                data.map((row) => {
                    return (
                        <div key={row.id} className="stu1">
                            {row.title} <br />
                            <img src={row.image} alt={row.title} height="200px" /> <br />
                            <p> {"price: " + row.price} <br /></p>
                            <p>                            {"description: " + row.description} <br /></p>
                            <p>                            {"category: " + row.category} <br /></p>
                            <p>                            {"id: " + row.id} <br /></p>
                            <p>                            {"rating count: " + row.rating.count} </p>

                        </div>
                    )
                })
            }
        </>
    );
}
export default ProductDetail;