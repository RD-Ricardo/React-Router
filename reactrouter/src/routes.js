import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato';
import Error from './pages/Error';
import Header from './components/Header';
import Produto from './pages/Produto';

const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Sobre" component={Sobre}/>
                <Route path="/Contato" component={Contato}/>
                <Route path="/Produto/:id" component={Produto}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;