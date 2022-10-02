import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Main from "./pages/Main/Main";
import Skils from "./pages/Skills/Skills";
import "./App.scss"
import About from "./pages/About/About";
import Portfolio from "./pages/Protfolio/Portfolio";

const App: React.FC = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="pages" timeout={1500}>
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </CSSTransition>
      <Routes location={location}>
      </Routes>
    </TransitionGroup>
  )
}

export default App