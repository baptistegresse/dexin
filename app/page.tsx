import Navbar from "./components/Navbar";
import LogoBTCsvg from "@/public/bitcoin-btc-logo.svg";
import LogoETHsvg from "@/public/ethereum-eth-logo.svg";
import LogoUSDCsvg from "@/public/usd-coin-usdc-logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full overflow-hidden">
      <Navbar />
      <div className="w-full h-64 flex items-center justify-center">
        <div className="flex flex-col justify-around px-48 w-full h-32 text-left text-4xl text-white">
          <p>Lorem ipsum dolor sit, amet consectetur</p>
          <p>100% on chain</p>
        </div>
      </div>

      <div className="h-96 flex space-x-28 justify-center">
        <div className="flex flex-col bg-[#242529] w-2/5 h-full text-left text-xl text-white rounded-xl space-y-4 pl-12">
            <h2 className="text-2xl pt-8">Lorem ipsum dolor sit, amet consecutiv</h2>
            <p>Lorem ipsum dolor sit, dolor sit</p>
            <p>Lorem ipsum dolor sit, dolor sit</p>
        </div>
        <div className="flex flex-col mx-22 px-6 w-1/4 h-full text-center text-1xl text-white rounded-xl  items-center justify-around ">
            <div className="w-full flex justify-around">
              <div className="w-1/3 flex flex-col items-center justify-center">
              <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-gray-300 dark:bg-gray-200 dark:text-purple-100">
                  <Image
                    src={LogoBTCsvg}
                    alt="BTC Logo"
                    width={14}
                    height={10}
                  />
                  <p className="whitespace-nowrap text-sm text-black">WBTC</p>
                </span>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="%" style={{ marginTop: '8px' }} />
              </div>
              <div className="w-1/3 flex flex-col  items-center justify-center">
              <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-gray-300 dark:bg-gray-200 dark:text-purple-100">
                  <Image
                    src={LogoETHsvg}
                    alt="ETH Logo"
                    width={10}
                    height={10}
                  />
                  <p className="whitespace-nowrap text-sm text-black">WETH</p>
                </span>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="%" style={{ marginTop: '8px' }} />
              </div>
            </div>
            <div className="w-full">
              <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-gray-300 dark:bg-gray-200 dark:text-purple-100">
                    <Image
                      src={LogoUSDCsvg}
                      alt="USDC Logo"
                      width={15}
                      height={15}
                    />
                    <p className="whitespace-nowrap text-sm text-black">USDC</p>
              </span>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="" style={{ marginTop: '8px' }} />
            </div>
            <button className="bg-red-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full">
              Create my index
            </button>
        </div>
      </div>
    </main>
  );
}
