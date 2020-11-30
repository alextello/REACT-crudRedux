import React, { Fragment, useEffect } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';
// Componentes
import Producto from './Producto';

const Productos = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        // Consultar la API
        const cargarProductos = () => dispatch(obtenerProductosAction())
        cargarProductos();

        //eslint-disable-next-line
    }, [])

    // obtener el state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.cargando);
    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            {error ? <p className="font-weight-bold alert alert-danger text-center my-4">Hubo un error</p> : null}
            {cargando ? <p className="text-center my-4">Cargando...</p> : null}
            <table className="table table-stripped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precios</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto key={producto.id} producto={producto} />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Productos;