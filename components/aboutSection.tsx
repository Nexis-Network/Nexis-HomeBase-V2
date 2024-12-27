"use client"

import { useRef } from "react"
import Image from "next/image"

import styles from "./styles/about.module.css"

export default function AboutSection() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const swiperRef = useRef<any>(null)

  return (
    <section className="relative w-full border-b border-[#1c2023] bg-transparent">
      <div className="grid grid-cols-4 divide-y divide-[#1c2023]">
        {/* Top Row - 1/4 height */}
        <div className="relative h-[calc(100vh/6)] w-full border-t border-[#1c2023] p-4" />
        <div className="relative h-[calc(100vh/6)] w-full border-t border-[#1c2023] p-4" />
        <div className="relative h-[calc(100vh/6)] w-full border-t border-[#1c2023] p-4" />
        <div className="relative h-[calc(100vh/6)] w-full border-t border-[#1c2023] p-4" />

        {/* Middle Row - 2/4 height */}
        <div className="relative h-[calc(100vh/3)] w-full border-[#1c2023] py-4">
          {/* Capital List */}
          <div className="flex size-full items-center justify-center pl-12">
            <ul className={styles.capitalList}>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>AI Agents</div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>DeFi</div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>DePin</div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>DeSci</div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
            </ul>
          </div>
        </div>
        <div className="relative col-span-2 h-[calc(100vh/3)] w-full p-4">
          <div className="relative flex size-full items-center justify-center">
            <div className="relative size-full">
            </div>
          </div>
        </div>
        <div className="relative h-[calc(100vh/3)] w-full py-4">
          <div className="flex size-full items-center justify-center pr-8">
            <ul className={styles.capitalList}>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>AI Agent Usage</div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>Staking/Delegating</div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>
                  Buy, Sell, Trade Data
                </div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
              <li className={styles.capitalItem}>
                <Image
                  src="/icons/nexis-icon.svg"
                  alt="Nexis Icon"
                  width={23}
                  height={18}
                  className={styles.capitalItemIcon}
                />
                <div className={styles.capitalItemText}>Gas Fees</div>
                <div className={styles.capitalItemDecorTopLeft} />
                <div className={styles.capitalItemDecorTopRight} />
                <div className={styles.capitalItemDecorBottomRight} />
                <div className={styles.capitalItemDecorBottomLeft} />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row - 1/4 height */}
        <div className="relative h-[calc(100vh/6)] w-full border-b border-[#1c2023] p-4" />
        <div className="relative h-[calc(100vh/6)] w-full border-b border-[#1c2023] p-4" />
        <div className="relative h-[calc(100vh/6)] w-full border-b border-[#1c2023] p-4" />
        <div className="relative h-[calc(100vh/6)] w-full border-b border-[#1c2023] p-4" />
      </div>
    </section>
  )
}
