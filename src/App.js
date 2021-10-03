import React, { useEffect } from 'react'
import { Switch, Route, useLocation, withRouter } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home'
import SingleWork from './pages/SingleWork'
import About from './pages/About'
import News from './pages/News'
import SingleNews from './pages/SingleNews'
import Contact from './pages/Contact'
import Page404 from './pages/404'
import Portfolio from './pages/Portfolio'
import MenuPage from './elements/MenuPage';

import ScrollTop from './components/ScrollTop'
import JoinUs from './pages/JoinUs';

function App() {

  const location = useLocation()

  useEffect(() => { setTimeout(() => { window.scrollTo(0, 0) }, 500) }, [location])

  return (
    <div>
      <ScrollTop />
      <AnimatePresence initial={true} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/Menu'><MenuPage /></Route>
          <Route path='/Portfolio'> <Portfolio /> </Route>
          <Route path='/works-:workId'><SingleWork /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/news'><News /></Route>
          <Route path='/single-news-:newsId'><SingleNews /></Route>
          <Route path='/contact'><Contact /></Route>
          <Route path='/join'><JoinUs /></Route>
          <Route ><Page404 /></Route>
        </Switch>
      </AnimatePresence>
    </div>
  )

}

const WithRouterApp = withRouter(App);
export default WithRouterApp
