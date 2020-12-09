import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';
import { mostrarAlerta } from '../actions/alertaActions';

const NuevoProducto = ({ history }) => {
    // State del componente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    // utilizar usedispatch y crea la funcion
    const dispatch = useDispatch();

    // acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    // acceder al state de alerta
    const alerta = useSelector(state => state.alerta.alerta);

    // Mandar a llamar el action de productoAction
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));

    // Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        // validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(mostrarAlerta(alerta));
            return;
        }
        // si no hay errores

        // crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        // redireccionar
        history.push('/');
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo producto</h2>
                        {alerta ? <div className={alerta.classes}>{alerta.msg}</div> : null}
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
                        {cargando ? <p>Cargando...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error...</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;