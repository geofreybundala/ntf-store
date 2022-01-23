import {AiOutlineClose ,AiOutlineRight} from 'react-icons/ai'
import {FiUser, FiHelpCircle} from 'react-icons/fi';
import { menuList } from '../header/utils/List';

const SideBar = (props:any) =>{
    return (
            <>
                <div className={`${!props.status ? 'hidden' : 'block' } md:hidden top-0 left-0 w-[50vw] bg-white  p-4  text-gray-600 fixed h-full z-10`}>
                    <div className="flex justify-end">
                        <div onClick={props.func} className='text-gray-900'><AiOutlineClose/></div>
                    </div>

                    <div className='flex flex-col mt-10'>
                        {menuList.map((menu,index) => {
                            return (
                            <div className='flex justify-between pt-3'>
                                <div className='text-gray-900 uppercase'> <span>{menu.name}</span></div>
                                <div className='text-gray-900'> <AiOutlineRight/></div>
                            </div>
                            )
                        })}
                    </div>

                   
                   <div className='flex flex-col mt-5'>
                       <div className='flex items-center justify-start'>
                           <div className=''>
                               <FiUser/>
                           </div>
                           <div className='px-2 py-1 text-base font-light'>Account</div>
                       </div>

                       <div className='flex items-center justify-start'>
                           <div className=''>
                               <FiHelpCircle/>
                           </div>
                           <div className='px-2 py-1 text-base font-light'>Help</div>
                       </div>
                   </div>
                </div>
            </>
    );
}

export default SideBar;