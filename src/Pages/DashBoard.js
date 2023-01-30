import React, { useState } from 'react'
import CardUI from '../UI/CardUI'
import BankAccount from './BankAccount'
import { Button,Typography } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import SideNav from '../Componets/NavBar/SideNav';

function DashBoard() {
  const navigate = useNavigate();
  const [showNav, setShowNav]= useState(true)
  //I think the side navbar needs to be reduced.
  return (
    <>
    <div id="main-content" className="h-full mt-10 w-full bg-gray-50 relative flex items-stretch grid grid-cols-2 gap-2 overflow-y-auto lg:ml-30">
    {/* <div className='float-left ml-[210px]'> */}
      <main class="p-6 sm:p-10 space-y-6">
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div class="max-w-4xl mx-auto">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
              <Typography
                as="a"
                href="#"
                variant="h3"
                className="mr-4 cursor-pointer py-1.5 font-normal"
              >
                <span>Money Insights</span>
              </Typography>

          <div className="flex w-max gap-4">
            <Button variant="gradient"
        
        onClick={()=>navigate("/dailyTransactions")}
        >Daily</Button>
        <Button 
        variant="gradient"
        onClick={()=>navigate("/monthlyTransactions")}
        >Monthly</Button>
        <Button variant="gradient">Yearly</Button>
          </div>
        </div>
        {/* <div class="flex flex-wrap items-start space-evenly justify-end -mb-3">
        <button class="inline-flex items-center ml-10 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-lg font-medium rounded-md">
          Daily
          </button>
          <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-lg font-medium rounded-md">
          Monthly
          </button>
          <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-lg font-medium rounded-md">
          Yearly
          </button>



          
          {/* <button class="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
            Manage dashboard
          </button>
          <button class="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create new dashboard
          </button> 
        </div> */}
        



        <div class="bg-white rounded-3xl p-8 mb-5">
              
          <CardUI/>
          <div class="flex items-center justify-between">
            {/* <div class="flex items-stretch">
              <div class="text-gray-400 text-xs">Members connected</div>
              <div class="h-100 border-l mx-4"></div>
              <div class="flex flex-nowrap -space-x-3">
                <div class="h-9 w-9">
                  <img class="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random"/>
                </div>
                <div class="h-9 w-9">
                  <img class="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random"/>
                </div>
              </div>
            </div> */}
            {/* <div class="flex items-center gap-x-2">
              <button type="button" class="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                </svg>
              </button>
              <button type="button" class="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                Open
              </button>
            </div> */}
          </div>

          <hr class="my-10"/>

          <div class="grid grid-cols-2 gap-x-20">
            <div>
              <h2 class="text-2xl font-bold mb-4">Stats</h2>

              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <div class="p-4 bg-green-100 rounded-xl">
                    <div class="font-bold text-xl text-gray-800 leading-none">Good day, ristin</div>
                    <div class="mt-5">
                      <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                        Start tracking
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div class="font-bold text-2xl leading-none">20</div>
                  <div class="mt-2">Tasks finished</div>
                </div>
                <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                  <div class="font-bold text-2xl leading-none">5,5</div>
                  <div class="mt-2">Tracked hours</div>
                </div>
                <div class="col-span-2">
                  <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div class="font-bold text-xl leading-none">Your Expesnses Today</div>
                    <div class="mt-2">This should be in KSH</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
               {/* This section should use map or  set state */}
              <h2 class="text-2xl font-bold mb-4">Your Investment Plan/Ideas</h2>

              <div class="space-y-4">
                <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-xs">Number 10</div>
                    <div class="text-gray-400 text-xs">4h</div>
                  </div>
                  <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                  <div class="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>Deadline is today
                  </div>
                </div>
                <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-xs">Grace Aroma</div>
                    <div class="text-gray-400 text-xs">7d</div>
                  </div>
                  <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                  <div class="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>New feedback
                  </div>
                </div>
                <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                  <div class="flex justify-between">
                    <div class="text-gray-400 text-xs">Petz App</div>
                    <div class="text-gray-400 text-xs">2h</div>
                  </div>
                  <a href="javascript:void(0)" class="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <BankAccount/>
    </div>
   {/* <div className='float-right mr-[30px] pt-6 shadow-sm'>
      <BankAccount/>
    </div>  */}
    </>
    

  )
}

export default DashBoard