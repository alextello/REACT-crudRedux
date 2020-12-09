import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,

} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            // insertar en API
            const res = await clienteAxios.post('productos', producto);
            // si todo sale bien, actualiza el state
            dispatch(agregarProductoExito(res.data));
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

// Funcion que descarga proudctos de base de datos
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());
        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargarProductosExitosa(respuesta.data))
        } catch (error) {
            dispatch(descargarProductosError());
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

// Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());
            // Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado',
                'El registro ha sido eliminado',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError(id));
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})

// Colocar producto en edición
export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch(obtenerProductoEditarAction(producto))
    }
}

const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
});

// Editar un registro en la api y state
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto())
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExito(producto));
        } catch (error) {
            dispatch(editarProductoError());
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})