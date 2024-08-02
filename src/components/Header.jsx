import { NavLink } from "react-router-dom";
import { LuWallet } from "react-icons/lu";

export default function Header() {
  return (
    <div className='flex justify-between items-center h-20 px-14 bg-accent-color font-bold'>
      <div className="logo-and-nav flex items-center gap-x-10">
        <img src="./logo/ChainPoll-logo-mini.png" alt="" width={64} height={64} />
        <div className='navigations flex gap-x-6'>
          <NavLink
            to={'/'}
            className={({ isActive }) => 
              `py-1 px-4 rounded ${isActive ? "bg-secondary-color text-background-color" : "bg-background-color text-secondary-color"}`}
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) => 
              `py-1 px-4 rounded ${isActive ? "bg-secondary-color px-2 py-1" : "text-secondary-color"}`}
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="wallet">
        <button className="flex border-2 border-primary-color rounded-full px-6 py-1 items-center gap-x-2">
          <LuWallet size={30} color="#112D4E" /> Connect Wallet
        </button>
      </div>
    </div>
  )
}
