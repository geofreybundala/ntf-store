import {AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import {BsSearch} from "react-icons/bs"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {menuList} from "./utils/List"
import SideBar from "../sidebar/SideBar"
import { useState } from "react";
import {Link } from "react-router-dom";

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);  
    const closeSideBar = () => {
        setShowSidebar(!showSidebar);
    } 
   return ( 
    <div className="p-2 md:p-5 md:mx-4">
        <div className="flex justify-between">
            <div className="flex items-center gap-2 md:hidden">
                <div>
                {showSidebar ?
                    <AiOutlineClose onClick={() => setShowSidebar(!showSidebar)}/>:
                    <AiOutlineMenu onClick={() => setShowSidebar(!showSidebar)}/>
                    
                    
                }   
                </div>  
                <div className="text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-purple-500">
                    NTF-store
                </div>
            </div>

            <Link to={"/"} className="hidden text-transparent md:block bg-gradient-to-r bg-clip-text from-green-400 to-purple-500">
                NTF-store
            </Link>

            <div className="flex space-x-11">
                <div className="hidden md:flex md:space-x-2">
                    <div className="flex items-center space-x-1">
                        <BiSupport/>
                        <span>  Support</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <GoLocation/>
                        <span>  Find Store</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4 sm:m-2">
                    <div className="hidden md:block"><AiOutlineHeart/></div>
                    <div className="sm:block md:hidden ">
                        <BsSearch className="mx-auto"/>
                        <span className="text-sm font-light uppercase">Search</span>
                    </div>

                    <div className="flex flex-col justify-center text-sm font-light">
                        <FaRegUser className="mx-auto"/>
                        <div className="text-sm font-light uppercase md:hidden">Account</div>
                    </div>

                    <div className="flex flex-col justify-center text-sm font-light text-center">
                        <AiOutlineShoppingCart className="mx-auto"/>
                        <span className="text-sm font-light uppercase md:hidden">Cart</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-1 border-b-2 border-gray-300">
            {/* <div className="">
                <span>Art</span>
            </div> */}
        </div>

        <div className="hidden md:flex md:justify-between md:mt-1 md:items-center">

            {menuList.map((menu,index) => {
                return (
                    <div className="text-sm font-light uppercase" key={index}>
                        <span>{menu.name}</span>
                    </div>
                )
            })}
            
            <div className="">
            <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-1.5  dark:placeholder-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-100" placeholder="search product"/>
            </div>
            </div>
        </div>
        <SideBar func={closeSideBar} status={showSidebar} />
    </div>

    )
}

export default Header