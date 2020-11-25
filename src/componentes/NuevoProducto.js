import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {
    // State del componente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    // utilizar usedispatch y crea la funcion
    const dispatch = useDispatch();

    // Mandar a llamar el action de productoAction
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));

    // Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        // validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            return;
        }
        // si no hay errores

        // crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo producto</h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input
                                    name="nombre"
                                    type="text"
                                    className="form-control"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input
                                    name="precio"
                                    type="number"
                                    className="form-control"
                                    value={precio}
                                    onChange={e => setPrecio(+e.target.value)}
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                value="Agregar"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;