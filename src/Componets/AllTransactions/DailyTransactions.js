import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PieChart from '../../UI/PieChart'
import {useNavigate} from "react-router-dom"
import FormUI from '../../UI/FormUI'
import Transactions from '../../DataTransactions/DailyData'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input
} from "@material-tailwind/react";
import axios from 'axios'
import AddNewTransaction from '../../Pages/AddNewTransaction'

function DailyTransactions() {

  
  const navigate = useNavigate();
  const [transaction , setTransaction] = useState([]);

 

  useEffect(()=>{
    axios.get('https://localhost:7196/api/DailyTransactions')
    .then(response =>{
      setTransaction(response.data)
      console.log(response.data);
    })
    .catch(err=>{
      console.log(err)
    })

  },[])
  //This component shold be dynamic and is resusable
   
  return (
    <div className='h-full w-full bg-gray-50 relative  mt-4 overflow-y-auto lg:ml-70'>
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
   <AddNewTransaction  />
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
               
                <th scope="col" class="text-sm font-small text-gray-900 ">
                  Name
                </th>
                <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4">
                  Company
                </th>
                <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4">
                TransactionCost
                </th>
                <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4">
                TransactionCostCharges
                </th>
                <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4">
                 ModeOfPayment
                </th>
                <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4">
                DateOfTransaction
                </th>
                <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4">
                TransactionType
                </th>
              </tr>
            </thead>
      {
        transaction.map(DT =>
         
         
            
            <tbody key={DT.id}>
              <tr className= "bg-blue-100 ">
               
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {DT.transactionName}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {DT.companyName}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {DT.transactionCost}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {DT.transactionCostCharges}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {DT.modeOfPayment}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {DT.dateOfTransaction}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {DT.transactionType}
                </td>
                
              </tr>
              
             
            </tbody>
          

        )
      }
      </table>

  
 

    {/* EndOfDateTransactions 
   <div  className='ml-10 mt-10'>
    <PieChart/>
   </div>
   */}
</div>


    </div>
  )
}

export default DailyTransactions