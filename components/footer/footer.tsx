import type { ReactNode } from "react"

interface FooterProps {
  className?: string
}

const Footer = ({ className = "" }: FooterProps): ReactNode => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 items-start justify-start border-t border-[#787878]/20 bg-[#07090b]/50 py-1 backdrop-blur-lg">
      <div className="col-span-4 mx-2 grid max-w-7xl grid-flow-col justify-start gap-5 px-4">
        <div className="justify-start border-r border-[#66696a]/60 pr-2">
          <a
            href="https://status.nexis.network"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <div className="size-2 animate-pulse rounded-full bg-[#b6ff1a]" />
            <span>Operational</span>
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.07692 4.25H4.38462C3.61991 4.25 3 4.86991 3 5.63462V11.8654C3 12.6301 3.61991 13.25 4.38462 13.25H10.6154C11.3801 13.25 12 12.6301 12 11.8654V10.75"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 8.5L13 3.5M13 3.5H9M13 3.5V7.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
        <div className="justify-start pr-2">
          <a
            href="https://app.deform.cc/form/98c69f0b-6d3d-4848-b114-d877db5f798a/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-100"
            aria-label="Help and Support"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M5.625 6.1875h6.75m-6.75 2.25H9M1.6875 9.57c0 1.2.84225 2.2455 2.03025 2.4203.84675.1245 1.7025.2197 2.56725.2842.2625.0195.5025.1575.64875.3758L9 15.75l2.0663-3.0997c.0724-.1078.1685-.1977.2809-.2628.1125-.0651.2382-.1038.3678-.113.8589-.0641 1.7152-.1589 2.5672-.2842 1.188-.1748 2.0303-1.2195 2.0303-2.42105v-4.5135c0-1.2015-.8423-2.24625-2.0303-2.421A36.294434 36.294434 0 0 0 9 2.25c-1.794 0-3.558.13125-5.28225.38475-1.188.17475-2.03025 1.22025-2.03025 2.421V9.57Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Help & Support
          </a>
        </div>
        <div className="justify-start text-sm text-neutral-500 dark:text-neutral-400">
          This site is operated by Nexis Labs, utilizing software open sourced
          by Nexis Foundation Inc.&nbsp;
          <a
            href="https://docs.nexis.network"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#a3ff1a] hover:text-lime-500 hover:underline dark:text-lime-300"
          >
            Learn more
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
