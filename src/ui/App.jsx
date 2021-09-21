import {Route, Switch} from "react-router-dom";
import {Products} from "./Products/Products";
import {Item} from "./Products/Product/Item/Item";
import './App.css';

export const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/product/:id" component={Item}/>
      </Switch>
    </div>
  )
}