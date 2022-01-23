import { useState } from "react";

const SideBar = (props:any) =>{
    return (
            <>
                <div className={`${!props.status ? 'hidden' : 'block' } md:hidden left-0 w-[35vw] bg-gray-100  p-10 pl-20 text-gray-600 fixed h-full`}>
                    <h2 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h2>
                </div>
            </>
    );
}

export default SideBar;