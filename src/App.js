
import 'devextreme/dist/css/dx.light.css';//devextreme styles
import SideNav from './Componets/NavBar/SideNav';
import TopNav from './Componets/NavBar/TopNav';
import Button from 'devextreme-react/button';

function App() {
  
  return (
    <div >

     <TopNav/> 
       <SideNav/>  
    </div>
  );
}

export default App;
