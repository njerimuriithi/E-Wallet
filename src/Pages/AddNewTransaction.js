import React ,{useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input
  } from "@material-tailwind/react";

function AddNewTransaction() {
  const url ='https://localhost:7196/api/DailyTransactions';
    const [openForm ,setOpenForm] = useState(false);
    const [transactionname , setTransactionName] = useState('');
    const [companyname ,setCompanyName] = useState('');
    const[transactioncost ,setTransactionCost] = useState('');
    const[transactionCostCharges,setTransactionCostCharges] = useState('');
    const[modeofpayment , setModeOfPayment]=useState('');
    const[transactiontype,setTransactionType]= useState('');
   
    const handleSubmit = async (e)=>{
      e.preventDefault();
      axios.post(url,{ 
        transactionname,companyname,transactioncost,transactionCostCharges,modeofpayment,transactiontype
 
      }, { headers: {
        'content-type':'application/json'
      }}
      ).then(res => console.log('posting data',res.data) ) .catch(err => console.log(err))
    }
   

  return (
    <div class="grid grid-cols-4 content-start">
    <div>
    <button class="font-bold text-gray-800 tracking-widest text-center">All Transactions</button>
    </div>
    <Popover placement="bottom-end">
    <PopoverHandler>
    <button type="button" 
    // onClick={()=>setOpenForm(true)}
    class="w-[148px] inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
    Add New</button>
    </PopoverHandler>
    <PopoverContent 
     
    className="w-[350px] h-[460px]">
    <div className="flex w-72 flex-col gap-4">
    <Input color="purple" 
    label="Transaction Name" 
    value={transactionname} 
    onChange={(e) => setTransactionName(e.target.value)}
    />
    <Input color="purple" 
    label="Company"
    value={companyname} 
    onChange={(e) => setCompanyName(e.target.value)}
    />
      <Input color="purple" 
    label="Transaction Cost"
    value={transactioncost} 
    onChange={(e) => setTransactionCost(e.target.value)} />

    <Input color="purple" 
    label="Transaction Cost Charges"
    value={transactionCostCharges} 
    onChange={(e) => setTransactionCostCharges(e.target.value)} />

    <Input color="purple" 
    label="ModeOfPayment"
    value={modeofpayment} 
    onChange={(e) => setModeOfPayment(e.target.value)}

    />
    <Input color="purple" label="Type of Transaction"
      value={transactiontype} 
      onChange={(e) => setTransactionType(e.target.value)} />
    
    </div>
    <button type="button" 
   onClick={handleSubmit}
    class="w-[148px] inline-block mt-4 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
    Submit </button>
    
      {/* <FormUI open={openForm}/> */}
    </PopoverContent>
    
    </Popover>

  
    
</div>
  )
}

export default AddNewTransaction