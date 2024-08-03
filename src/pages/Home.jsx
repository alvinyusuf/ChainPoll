import { useContext } from "react";
import { WalletContext } from "../contexts/WalletContext";

export default function Home() {
  const { account, connectWallet } = useContext(WalletContext);

  return (
    <div className="font-bold flex flex-col gap-y-4 items-center justify-center h-[calc(100vh-80px)] bg-background-color">
      {account ? (
        <>
          <div className="text-6xl text-primary-color">
            Please Choose
          </div>
          <div className="flex gap-x-4">
            <button
              className="text-6xl py-4 px-8 bg-secondary-color rounded-3xl text-background-color"
            >
              Create a Poll
            </button>
            <button
              className="text-6xl py-4 px-8 bg-secondary-color rounded-3xl text-background-color"
            >
              Join a Poll
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-6xl text-primary-color">
            Please Connect a Wallet to Continue
          </div>
          <div>
            <button
              className="text-6xl py-2 px-8 bg-secondary-color rounded-3xl text-background-color"
              onClick={connectWallet}
            >
              Connect
            </button>
          </div>
        </>
      )}
    </div>
  );
}
