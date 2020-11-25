import React from 'react';

const NuevoProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo producto</h2>
                        <form>
                            <div class="form-group">
                                <label for="">Nombre Producto</label>
                                <input name="nombre" type="text" className="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="">Precio Producto</label>
                                <input name="precio" type="number" className="form-control" />
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