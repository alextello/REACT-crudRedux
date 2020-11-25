import React from 'react';

const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar producto</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input name="nombre" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input name="precio" type="number" className="form-control" />
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