import { ScrollRestoration } from "react-router-dom";

import Main from './components/Main.jsx'
import './assets/scss/styles.scss';

function App() {
  return (
      <>
        <Main />
        <ScrollRestoration />
      </>
  )
}

export default App
