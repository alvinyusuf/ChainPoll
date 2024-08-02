export default function Home() {
  return (
    <div className="font-bold flex flex-col gap-y-4 items-center justify-center h-[calc(100vh-80px)] bg-background-color">
      <div className="text-6xl text-primary-color">
        Please Connect a Wallet to Continue
      </div>
      <div>
        <button className="text-6xl py-2 px-8 bg-secondary-color rounded-3xl text-background-color">Connect</button>
      </div>
    </div>
  )
}
