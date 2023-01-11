import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PieChart from '../../UI/PieChart'
import {useNavigate} from "react-router-dom"
import FormUI from '../../UI/FormUI'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input
} from "@material-tailwind/react";

function DailyTransactions() {
  const navigate = useNavigate();
  const [openForm ,setOpenForm] = useState(false);
  //This component shold be dynamic and is resusable
   
  return (
    <div className='h-full w-full bg-gray-50 relative  mt-4 overflow-y-auto lg:ml-64'>
      <div class="h-20 grid grid-cols-3 gap-4 content-center ">
      <div> 
      <h4 class="text-2xl font-bold text-gray-800 tracking-widest text-center">Your Transactions</h4>
       {/* Startofdatepicker */}

      </div>
      <div class="flex items-center justify-center">
    <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
    <input type="text"
      class="form-control block w-50 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" />
   
    <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
      <i class="fas fa-calendar datepicker-toggle-icon"></i>
     
    </button>
  </div>
  </div>
    {/* EndOfDatepicker */}
  
</div>
 {/* start of navbarhorizontal */}
 <div class="grid grid-cols-3 content-start">
        <div>
        <button class="font-bold text-gray-800 tracking-widest text-center">All Transactions</button>
        </div>
        <Popover placement="bottom-end">
        <PopoverHandler>
        <button type="button" 
         onClick={()=>setOpenForm(true)}
        class="w-[148px] inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
        Add New</button>
        </PopoverHandler>
        <PopoverContent className="w-[350px] h-[360px]">
        <div className="flex w-72 flex-col gap-4">
        <Input color="purple" label="Transaction Name" />
        <Input color="purple" label="Company" />
        <Input color="purple" label="Amount" />
        <Input color="purple" label="Transaction Cost" />
        <Input color="purple" label="Type of Transaction" />
        
        </div>
        <button type="button" 
        
        class="w-[148px] inline-block mt-4 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
        Submit </button>
        
          {/* <FormUI open={openForm}/> */}
        </PopoverContent>
        
        </Popover>
        <div>
        <button class="font-bold text-gray-800 tracking-widest text-center ml-20">Expenses</button>
        </div>
      
        
</div>
  {/* <h4 className='mt-10 text-gray-600 '>Newest</h4> */}
    {/* Endofalltransactions */}

    {/* startNewest */}
    <div class="grid grid-cols-2 content-start">
    {/* <div class="flex flex-col w-[700px]">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden"> */}
        <table class="min-w-full text-center h-[100px]">
        <thead>
            <tr>
             
              <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Company
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Amount
              </th>
            </tr>
          </thead>
          
          <tbody>
            <tr className= "bg-blue-100 ">
             
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                withdrawal
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Safaricom
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                1000
              </td>
            </tr>
            
           
          </tbody>
        </table>
      {/* </div>
    </div>
  </div>
</div> */}
  
    {/* EndOfNewstTransaction */}
    {/* <h4 className='mt-10 text-gray-600 '>Yesterday</h4> */}
    {/* StartOfYesterdayTransaction */}
    {/* <div class="flex flex-col w-[700px]">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
           
          <tbody>
            <tr className= "bg-green-100 ">
             
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                withdrawal
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Safaricom
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                1000
              </td>
            </tr>
            
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> */}

    {/* EndOfYesterdayTransaction */}
    {/* <h4 className='mt-10 text-gray-600 '>Specific Date Transactions</h4> */}
    {/* StartOfDateTransactions */}
    {/* <div class="flex flex-col w-[700px]">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
           
          <tbody>
            <tr className= "bg-indigo-100 ">
             
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                withdrawal
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Safaricom
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                1000
              </td>
            </tr>
            
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> */}

    {/* EndOfDateTransactions */}
   <div  className='ml-20 mt-10'>
    <PieChart/>
   </div>
</div>


    </div>
  )
}

export default DailyTransactions