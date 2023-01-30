import React ,{useState} from 'react'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Input
  } from "@material-tailwind/react";

function AddNewTransaction() {
    const [openForm ,setOpenForm] = useState(false);
  return (
    <div class="grid grid-cols-3 content-start">
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

  
    
</div>
  )
}

export default AddNewTransaction