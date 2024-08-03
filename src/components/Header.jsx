import { NavLink } from "react-router-dom";
import { LuWallet } from "react-icons/lu";
import { useContext, useState } from "react";
import { WalletContext } from "../contexts/WalletContext";
import { MdContentCopy } from "react-icons/md";
import { BsBoxArrowRight } from "react-icons/bs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { account, connectWallet, disconnectWallet } = useContext(WalletContext);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(account);
    alert('Text copied to clipboard!');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        {(account === null) ? (
          <button onClick={connectWallet} className="flex border-2 border-primary-color rounded-full px-6 py-1 items-center gap-x-2">
            <LuWallet size={30} color="#112D4E" /> Connect Wallet
          </button>
        ) : (
          <>
            <button onClick={() => toggleMenu()} className="flex border-2 border-primary-color rounded-full px-6 py-1 items-center gap-x-2">
              {account?.substring(0, 14)}...
            </button>
            {isOpen && (
              <div className="origin-top-right absolute right-14 mt-2 w-48 rounded-xl shadow-lg bg-background-color ring-1 ring-primary-color">
                <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    onClick={() => copyToClipboard()}
                    className="flex items-center gap-x-2 px-4 py-2 text-sm text-primary-color hover:bg-accent-color hover:rounded-t-xl w-full text-left"
                    role="menuitem"
                  >
                    <MdContentCopy size={20} /> Copy Address
                  </button>
                  <button
                    onClick={disconnectWallet}
                    className="flex items-center gap-x-2 px-4 py-2 text-sm text-primary-color hover:bg-accent-color hover:rounded-b-xl w-full text-left"
                    role="menuitem"
                  >
                    <BsBoxArrowRight size={20} /> Logout
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
