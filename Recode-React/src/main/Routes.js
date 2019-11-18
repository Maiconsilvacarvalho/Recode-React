import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sobre from '../view/sobre/Sobre';
import Fotos from '../view/fotos/Fotos';
import Centro from '../view/home/Centro';
import Contato from '../view/contato/Contato';
import Cadastro from '../view/cadastro/Cadastro';

export default function Routes() {
  return(
    <Switch>
      <Route exact path='/' component={Centro} />
      <Route path='/sobre' component={Sobre} />
      <Route path='/fotos' component={Fotos} />
      <Route path='/contato' component={Contato} />
      <Route path='/cadastro' component={Cadastro} />
    </Switch>
  )
}