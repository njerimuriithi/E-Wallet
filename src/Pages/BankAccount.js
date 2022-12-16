import React from 'react'
import { Textarea,Button } from "@material-tailwind/react";

function BankAccount() {
  return (
    <div >
    <h1 className='text-2xl font-semibold ml-20'>My Card Transactions</h1>
    <div class="flex space-x-2 justify-center">
  <div>

  <img src={process.env.PUBLIC_URL + '/Images/MasterCard.png'} class="max-w-full h-auto rounded-lg mr-50" alt=""/>
  {/* <img src={process.env.PUBLIC_URL + '/yourPathHere.jpg'} />  */}
  {/* <button type="button" class="inline-bloc w-16 h-16 px-6 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-light-700 hover:shadow-lg focus:bg-light-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-light-800 active:shadow-lg transition duration-150 ease-in-out">
  <img src={process.env.PUBLIC_URL + '/Icons/money-transfer.png'} class="max-w-full h-auto rounded-lg" alt=""/>
  </button> */}
  <button type="button" class="inline-block w-20 h-20  mr-4 px-4 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
  <img src={process.env.PUBLIC_URL + '/Icons/money-transfer.png'} class="max-w-full h-auto rounded-lg" alt=""/>
  <p>Transfer</p>
  </button>
  <button type="button" class="inline-block px-4 w-20 h-20  mr-4  py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
  <img src={process.env.PUBLIC_URL + '/Icons/request-money.png'} class="max-w-full h-auto rounded-lg" alt=""/>
  <h2>Request</h2>
  </button>
  <button type="button" class="inline-block w-20 h-20  mr-4  px-4 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
  <img src={process.env.PUBLIC_URL + '/Icons/topup-payment.png'} class="max-w-full h-auto rounded-lg" alt=""/>
  <h2>TopUp</h2>
  </button>
    {/* <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Secondary</button>
    <button type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Success</button>
    <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Danger</button> */}
 
  </div>

  </div>

  <hr className='my-8 border border-slate-200'/>
   {/* Person Transferred money to */}
  <div className='rounded-lg shadow-md mb-4'>
            <div className="flex flex-col space-y-4">
            <div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                        <img src={process.env.PUBLIC_URL + '/Images/person.png'}  class="rounded-full h-14 w-14" alt=""/>
                        <div className="flex flex-col space-y-1">
                            <span className="font-bold">Leonard</span>
                            <span className="text-sm">Money sent</span>
                        </div>
                    </div>
                    <div className="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        date
                    </div>
                </div>
                </div>
    </div>
     {/* How much are you sending to him             */}
     <div className='rounded-lg shadow-md mb-6'>
        <div className="p-4">
            <h4 className="text-xl font-semibold text-blue-600">
            Total  Amount
            </h4>
        <p className="mb-2 leading-normal">6000 </p>
        </div>
     </div>
     {/* Information on why are you sending will she /he return */}

     <div className='w-96'>
     <Textarea color="purple #ce93d8"label="Message" />
     <Button fullWidth >Send Money </Button>

        </div>

    </div>
  )
}

export default BankAccount