import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SearchFraud = () => {
  return (
    <div className="relative overflow-hidden">
      <hr className="border-secondary" />
      <div className="py-12 lg:py-8">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Knowledge is Your Best Defense
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
            Our application provides you with the tools and information you need
            to recognize potential threats, protect your personal data, and
            navigate the digital world with confidence.
          </p>
          <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
            {/* Form */}
            <form action="/search" method="get">
              <div className="relative z-10 flex space-x-3 rounded-lg border bg-background p-3 shadow-lg">
                <div className="flex-[1_0_0%]">
                  <Label htmlFor="article" className="sr-only">
                    Search frauds
                  </Label>
                  <Input
                    name="query"
                    className="h-full"
                    id="article"
                    placeholder="Search frauds"
                  />
                </div>
                <div className="flex-[0_0_auto]">
                  <Button size={"default"} type="submit">
                    <SearchIcon /> Search
                  </Button>
                </div>
              </div>
            </form>
            {/* End Form */}
            {/* SVG Element */}
            <div className="absolute end-0 top-0 hidden -translate-y-12 translate-x-20 md:block">
              <svg
                className="h-auto w-16 text-orange-500"
                width={121}
                height={135}
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  strokeWidth={10}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
            {/* SVG Element */}
            <div className="absolute bottom-0 start-0 hidden -translate-x-32 translate-y-10 md:block">
              <svg
                className="h-auto w-40 text-cyan-500"
                width={347}
                height={188}
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  strokeWidth={7}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* End SVG Element */}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-20">
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Fraudulent Activity
              </span>
            </div>
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Phishing
              </span>
            </div>
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Identity Theft
              </span>
            </div>
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Credit Card Fraud
              </span>
            </div>
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Financial Scams
              </span>
            </div>
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Fraud Prevention
              </span>
            </div>
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Scam Alerts
              </span>
            </div>
            <div>
              <span className="m-1 inline-block rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
                Online Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFraud
