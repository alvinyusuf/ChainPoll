import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between p-4'>
      <div className="logo-and-nav flex items-center gap-x-4">
        <img src="./logo/ChainPoll-logo-mini.png" alt="" width={64} height={64} />
        <div className='navigations flex gap-x-4'>
          <button>Home</button>
          <button>About</button>
        </div>
      </div>
      <div>Wallet</div>
    </div>
  )
}
