"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";

export default function CustomButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const baseStyle =
    "px-4 py-2 z-50 font-bold text-white rounded-none transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0 focus:outline-none";

  if (isConnected)
    return (
      <button
        type="button"
        onClick={() => disconnect()}
        className={`${baseStyle} flex items-center justify-center space-x-2`}
      >
        <span>🔓</span>
        <span>Disconnect</span>
      </button>
    );
  return (
    <div>
    <button
      type="button"
      onClick={() => open()}
      className="uppercase text-sm font-light flex items-center justify-center space-x-2 pr-4"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Wallet Icon</title>
        <g clipPath="url(#clip0_2083_101)">
          <mask id="mask0_2083_101" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M20 0H0V20H20V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_2083_101)">
            <path d="M18.0251 13.925H14.6299C13.3833 13.9243 12.3728 13.0051 12.3721 11.8702C12.3721 10.7353 13.3833 9.81613 14.6299 9.81543H18.0251" stroke="white" strokeWidth="1.25" strokeLinecap="square"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.97461 4.77148H18.0257V17.7082H1.97461V4.77148Z" stroke="white" strokeWidth="1.25" strokeLinecap="square"/>
            <path d="M15.8323 4.68983V2.29212L1.97461 2.2915V17.7078" stroke="white" strokeWidth="1.25" strokeLinecap="square"/>
            <path d="M5.77832 8.57812H10.3063" stroke="white" strokeWidth="1.25" strokeLinecap="square"/>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2083_101">
            <rect width="20" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <span>Connect Wallet</span>
    </button>
    </div>
  );
}
