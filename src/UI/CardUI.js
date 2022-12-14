import React from 'react'

function CardUI() {
  const posts = [
    {
        title: "Total Income",
        value:"1000/=",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "Total Savings",
        value:"2000/=",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "Total Expenses",
        value: "4000/=",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    }
  ]
  return (
    <div>
      
      <div className="grid gap-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.value}
                            </p>
                           
                        </div>
                    </div>
                ))}
            </div>


        
    </div>
  )
}

export default CardUI