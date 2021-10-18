import { Switch, Route } from 'react-router-dom'
import { History, LocationState } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import Main from '../components/Main'
import Home from '../containers/Home'

const createRoutes = (history: History<LocationState>) => (
  <ConnectedRouter history={history}>
    <Main>
      <Switch>
        <Route component={Home} path='/' />
      </Switch>
    </Main>
  </ConnectedRouter>
)

export default createRoutes
