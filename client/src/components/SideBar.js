import React from 'react'
import Control from "../img/control.png"
import { useState } from 'react';

export const SideBar = () => {
    const [open, setOpen] = useState(true);
    return(
        <div className="flex">
            <div className={`${open ? "w-72" : "w-10"} h-screen bg-dark-purple relative`}>
                <img src={Control} className="absolute cursor-pointer rounded-full -right-3 top-9 w-7
            border-2 border-dark-purple" alt="sidebaricon" onClick={()=>setOpen(!open)}/>
            </div>   
            <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
                <h1>SideBar Test</h1>
            </div>
        </div>
    )
}