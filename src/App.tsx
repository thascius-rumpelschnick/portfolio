import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )

}

export default App;
