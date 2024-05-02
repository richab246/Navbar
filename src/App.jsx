import React, { useState } from 'react'
import './App.css';
import Logo from './assets/logo.png';
import { motion } from 'framer-motion';
import { LuUserSquare2 } from "react-icons/lu";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineBookmarks } from "react-icons/md";
import { BsFolder } from "react-icons/bs";
import { FiArchive } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

const navLinks = [
  {
    name: "Dashboard",
    icon: <RiHome5Line /> ,
  },
  {
    name: "Account",
    icon: <LuUserSquare2 />,
  },
  {
    name: "Folders",
    icon: <BsFolder />
  },
  {
    name: "Favourites",
    icon: <MdOutlineBookmarks />
  },
  {
    name: "Archive",
    icon: <FiArchive />
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />
  }
]

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isActive, setIsActive] = useState('Dashboard')

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const tapVariants = {
    tap: { scale: 0.95 },
  };

  return (
    <div className='w-full flex flex-row'>
    <div className={`transition-all duration-300 ease-in-out ${
      isExpanded ? "w-64" : "w-16" } h-screen bg-sidebar-bg flex flex-col justify-between`}>
      <div>
     <div
        className={`flex flex-row ${
          isExpanded ? "justify-between" : "justify-center"
        } items-center py-[16px]`}
      >
        {/* Conditional rendering to show/hide logo based on isExpanded */}
        <div className='flex flex-row gap-3 items-center'>
        <img src={Logo} alt="logo" className={`w-10 rounded-full ${isExpanded ? "ml-[16px]" : "ml-[4px]"}`} />  
        {isExpanded ? <div className='items-center transition-opacity duration-300'>
          <h3 className='text-white text-sm'>Maria Hill</h3>
          <p className='text-[11px] text-gray-400'>Workspace owner</p>
        </div> : null}  
        </div>    
        {/* Toggle Button */} 
        {isExpanded &&
         <div
         onClick={toggleSidebar}
         className="px-1 py-3 rounded-l-md bg-[#353333] cursor-pointer opacity-100 hover:opacity-50 transition-opacity duration-300"
       >
         <svg 
           xmlns="http://www.w3.org/2000/svg" 
           className="h-4 w-3 text-white"
           stroke="currentColor"
           viewBox="0 0 320 512">
            <path 
              fill="#FFFFFF"
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
         </svg>
       </div>
    }
        
     </div>
     <nav className={`transition-opacity duration-500`}>
        <ul className="mt-6">
          {navLinks.map((item, index) => (
           <div key={index} onClick={() => setIsActive(item.name)}>
              <motion.li
                variants={tapVariants}
                whileTap="tap"
                className={`flex items-center ${isExpanded? "px-4 py-2" : "px-2 py-2"} m-[15px] rounded-md cursor-pointer ${
                  isActive === item.name ? "bg-nav-hover" : "hover:bg-nav-hover"
                }`}>
                  {isActive === item.name ? <div className='text-white h-[100%]'>
                                               
                  </div> : null}
                <motion.div className="flex items-center">
                  {React.cloneElement(item.icon, {
                    className: `${
                      isActive === item.name
                        ? "text-white"
                        : "text-primary hover:text-white"
                    } text-xl`,
                  })}
                  {isExpanded && (
                    <span
                      className={`ml-[24px] ${
                        isActive === item.name ? "text-white" : "text-primary"
                      } font-semibold`}
                    >
                      {item.name}
                    </span>
                  )}
                </motion.div>
              </motion.li>
           </div>
          ))}
        </ul>
      </nav>
      </div>
      {isExpanded ? 
      <motion.div variants={tapVariants} className='mx-4 my-4 flex flex-col gap-2'>
      <div 
        className='border-2 border-dashed rounded-md border-nav-hover transition-opacity duration-300'>
           <div className='bg-nav-hover rounded-md m-[16px] items-center justify-center flex flex-col py-6'>
            <p className='text-white text-md'>Add new files</p>
            <p className='text-primary text-xs'>Up to 50 GB</p>
            <FaCirclePlus size={30} className='text-[#8ab7a3] bg-white rounded-full mt-2 shadow-2xl'/>
           </div>
        </div>
        <div className='flex flex-row border-2 border-nav-hover hover:bg-nav-hover rounded-md px-4 py-2 gap-2 cursor-pointer transition-opacity duration-500'>
        <TbLogout size={20} className='text-white'/>
        <p className='text-white text-sm'>Logout</p>
        </div>
        </motion.div> : 
        <motion.div
          variants={tapVariants} 
          className='mx-4 my-4 gap-3 flex flex-col'>
        <FaCirclePlus size={28} className='text-[#8ab7a3] bg-white rounded-full mt-2 shadow-2xl'/>
        <TbLogout size={30} className='text-white bg-nav-hover rounded-full px-[7px] py-1'/> 
        </motion.div>}
    </div>
    {!isExpanded && 
      <div
        onClick={toggleSidebar}
        className="px-1 py-3 h-10 rounded-r-md my-[16px] bg-[#353333] cursor-pointer opacity-100 hover:opacity-50 transition-opacity duration-300"
       >
        <svg  
         xmlns="http://www.w3.org/2000/svg" 
         className="h-4 w-2 text-white"
         viewBox="0 0 320 512">
          <path 
            fill="#FFFFFF"
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
      </svg>
      </div>
      }
    </div>
  )
}

export default App
