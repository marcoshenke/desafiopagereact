import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './views/Home/Home'
import WhoisTheGoat from './views/WhoisTheGoat/WhoisTheGoat'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component = {Home} path="/" element={<Home />}/>
        <Route path="/whoisthegoat" element={<WhoisTheGoat />}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes