// lib/wallet-modal.tsx
 
"use client";
 
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from 'wagmi';
 
export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
 
  return (
    <button onClick={() => open()} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {address ? `${address?.substring(0, 10)}...` : 'Connect Wallet'}
    </button>
  );
}