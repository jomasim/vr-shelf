import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Albums from './views/Albums'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/albums' component={Albums} />
    </Switch>
  </BrowserRouter>
)

export default App
