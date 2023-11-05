import React from 'react'
import { useEffect, useState } from 'react';
import ShoeCard from '../../components/ShoeCard';
import './Product.css'
import axiosConfig from '../../config';
function Product() {
    const [shoes, setShoes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredShoes, setFilteredShoes] = useState([]);

    useEffect(() => {
        axiosConfig.get('/products')
            .then((res) => {
                setShoes(res.data);
                setFilteredShoes(res.data);
            })
            .catch((error) => console.error('Error fetching shoes:', error));
    }, []);

    useEffect(() => {
        // Filter shoes based on searchTerm
        const filtered = shoes.filter(
            (shoe) =>
                shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                shoe.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredShoes(filtered);
    }, [searchTerm, shoes]);

    return (
        <div className='container-master'>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tìm kiếm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            /</div>
                <div className='cart-container'>
                    {shoes.map((shoe) => (
                        <div key={shoe.id} className="col-md-3 mb-4 mt-4 p-3">
                            <ShoeCard shoe={shoe} />
                        </div>
                    ))}
                </div>

            </div>
            )
}

            export default Product
