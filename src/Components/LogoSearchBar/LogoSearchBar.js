import React from 'react';
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import logo1 from '../Farmer/images/logo1.jpg'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import './LogoSearchBar.css';
const LogoSearchBar = () => {
    return (
        <div className='container-fluid search-container pt-2 d-flex justify-content-center align-items-center'>
            <a href="/"><img className='img-fluid' width='150' src={logo1} alt="logo of BARAJ" /></a>
            <input type="text" className='form-control search-bar' placeholder='Search ' />
            <button className='btn btn-success search-button'><FaSearch /></button>
            <div className="dropdown">
                <button className='account-button' type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    My Account 
                </button>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/farmer">Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/add-product-auction">Add Product For Auction</Link></li>
                    <li><Link className="dropdown-item" to="/add-product-sale">Add Product For Sale</Link></li>
                    <li><Link className="dropdown-item" to="/addproductforinspection">Add Product For Inspection</Link></li>
                    <li><Link className="dropdown-item" to="/accountdetails">Account Details</Link></li>
                    <li><Link className="dropdown-item" to="/history">History</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default LogoSearchBar;