import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            // insertar en API
            await clienteAxios.post('productos', producto);
            // si todo sale bien, actualiza el state
            dispatch(agregarProductoExito(producto));
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'El producto se agregó correctamente'
            });
        } catch (error) {
            console.log(error);
            // Si hay un error, cambia el state
            dispatch(agregarProductoError(true))
            // Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error'
            });
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// Si el producto se gurada en la BD
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// Si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});
