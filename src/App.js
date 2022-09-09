
import './App.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';


const App = () => {
  return ( // siempre retornar entre parentesis 
  //debe haber un elemento padre como caja y dentro de ella meter lo demás
  <div id="wrapper">

    <SideBar/>
    <ContentWrapper/>

</div>
  );
}

export default App;
