import {AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import {menuList} from "./utils/List"

const Header = () => {
   return ( 
    <div className="p-5 mx-4">
        <div className="flex justify-between">
            <div className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">NTF-store</div>
            <div className="flex space-x-11">
                <div className="flex space-x-2">
                    <div className="flex items-center space-x-1">
                        <BiSupport/>
                        <span>  Support</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <GoLocation/>
                        <span>  Find Store</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                <div><AiOutlineHeart/></div>
                <div><FaRegUser/></div>
                <div><AiOutlineShoppingCart/></div>
              </div>
            </div>
        </div>

        <div className="border-b-2 border-gray-300 mt-1">
            {/* <div className="">
                <span>Art</span>
            </div> */}
        </div>

        <div className="flex justify-between mt-1 items-center">

            {menuList.map((menu,index) => {
                return (
                    <div className="uppercase text-sm font-light" key={index}>
                        <span>{menu.name}</span>
                    </div>
                )
            })}
            
            <div className="">
            <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-1.5  dark:placeholder-gray-400 dark:focus:ring-gray-100 dark:focus:border-gray-100" placeholder="search product"/>
            </div>
            </div>
        </div>

    </div>

    )
}

export default Header