import React from 'react'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input 
} from "@material-tailwind/react";

function FormUI({open}) {
  if(!open) return null;
    
  return (
    <div className="flex w-72 flex-col gap-4">
    <Input color="blue" label="Input Blue" />
    <Input color="purple" label="Input Purple" />
    <Input color="indigo" label="Input Indigo" />
    <Input color="teal" label="Input Teal" />
  </div>
  )
}

export default FormUI