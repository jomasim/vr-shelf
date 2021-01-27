import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Albums from './views/Albums'
import Tracks from './views/Tracks'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/albums' component={Albums} />
      <Route exact path='/tracks/:trackname' component={Tracks} />
    </Switch>
  </BrowserRouter>
)

export default App
