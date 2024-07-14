// lib/wallet-modal.tsx
 
"use client";
 
import { useWeb3Modal } from "@web3modal/wagmi/react";
 
export default function ConnectButton() {
  const { open } = useWeb3Modal();
 
  return <button onClick={() => open()} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Connect Wallet</button>;
}