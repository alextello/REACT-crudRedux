import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navabar-expand-lg narvbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    <Link to={'/'} className="text-light">
                        CRUD - React, Redux, REST API & AXIOS
                    </Link>
                </h1>
            </div>

            <Link className='btn btn-danger nuevo-post d-block d-md-inline-block' to={'/producto/nuevo'}>Agregar nuevo producto</Link>
        </nav>
    );
}

export default Header;