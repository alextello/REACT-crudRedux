import React from 'react';
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import NuevoProducto from './componentes/NuevoProducto';
import EditarProducto from './componentes/EditarProducto';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos}></Route>
            <Route exact path="/producto/nuevo" component={NuevoProducto}></Route>
            <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
