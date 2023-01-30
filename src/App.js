
import SideNav from './Componets/NavBar/SideNav';
import TopNav from './Componets/NavBar/TopNav';
import {Routes ,Route} from 'react-router-dom'
import DashBoard from './Pages/DashBoard';
import DailyTransactions from './Componets/AllTransactions/DailyTransactions';
import MonthlyTransactions from './Componets/AllTransactions/MonthlyTransactions';
import Signup from './Pages/Signup';
import FormUI from './UI/FormUI';
//import DailyTransactions from './Componets/AllTransactions/DailyTransactions';
//import Transactions from './Pages/Transactions';


function App() {
  
  return (
    <div >

      <TopNav/>
       <Routes>
             <Route path="/" element={<DashBoard/>}/> 
             <Route path="/dailytransactions" element={<DailyTransactions/>}/>
             <Route path='/monthlytransactions' element={<MonthlyTransactions/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/New' element={<FormUI/>}/>
            {/* <Route path="/" element={<DailyTransactions/>}/> */}
          

        </Routes>



      
    </div>
  );
}

export default App;
