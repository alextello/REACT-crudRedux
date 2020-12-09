import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// Mostrar alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(mostrarAlertaAction(alerta))
    }
}

const mostrarAlertaAction = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})