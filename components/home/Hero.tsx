import Link from "next/link"

import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="py-18 relative overflow-hidden lg:py-24">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="absolute -top-96 start-1/2 flex -translate-x-1/2"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-40 rotate-[-60deg] bg-gradient-to-r from-background/50 to-background blur-3xl" />
        <div className="h-[50rem] w-[90rem] origin-top-left -translate-x-60 -rotate-12 rounded-full bg-gradient-to-tl from-primary-foreground via-primary-foreground to-background blur-3xl" />
      </div>
      {/* End Gradients */}
      <div className="relative z-10">
        {/* Flexbox Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8 xl:gap-x-12">
          {/* Left Section */}
          <div className="lg:w-3/7">
            <div className="py-10 lg:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <p className="">Elevate your projects</p>
                {/* Title */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Stay Safe in the Digital World
                  </h1>
                </div>
                {/* End Title */}
                <div className="mt-5 max-w-3xl">
                  <p className="text-xl text-muted-foreground">
                    Empower yourself with knowledge to prevent fraud and
                    cybercrime. Join our community and learn how to protect your
                    digital life.
                  </p>
                </div>
                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-3">
                  <Link href="/report">
                    <Button size={"lg"}>Report Frauds</Button>
                  </Link>

                  <Button size={"lg"} variant={"outline"}>
                    Search Frauds
                  </Button>
                </div>
                {/* End Buttons */}
              </div>
            </div>
          </div>
          {/* End Left Section */}

          {/* Right Section */}
          <div className="lg:w-4/7 mt-10 lg:mt-0">
            <img
              className="w-full rounded-md"
              src="https://placehold.co/800x500"
              alt="Image Description"
            />
          </div>
          {/* End Right Section */}
        </div>
        {/* End Flexbox Layout */}
      </div>
    </div>
  )
}

export default Hero
