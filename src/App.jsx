import Main from './components/Main.jsx'
import './assets/scss/styles.scss';
import { useLoaderData } from "react-router";

function App() {
  const data  = useLoaderData();
  console.log(data);
  return (
      <Main props={data[0]} />
  )
}

export default App
