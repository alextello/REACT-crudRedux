import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = ({ history }) => {

    const dispatch = useDispatch();

    // Nuevo state de producto
    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    });

    // Producto a editar
    const productoEditar = useSelector(state => state.productos.productoEditar);

    // llenar el state en el state automaticamente
    useEffect(() => {
        setProducto(productoEditar);
    }, [productoEditar])

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, precio } = producto;
    const submitEditarProducto = e => {
        e.preventDefault();
        dispatch(editarProductoAction(producto));
        history.push('/');
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar producto</h2>
                        <form onSubmit={submitEditarProducto}>
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input
                                    name="nombre"
                                    type="text"
                                    className="form-control"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input
                                    name="precio"
                                    type="number"
                                    className="form-control"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                value="Guardar cambios"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;