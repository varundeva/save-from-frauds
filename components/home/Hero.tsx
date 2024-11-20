import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-18 lg:py-24">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
        <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
      </div>
      {/* End Gradients */}
      <div className="relative z-10">
        {/* Flexbox Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8 xl:gap-x-12">
          {/* Left Section */}
          <div className="lg:w-3/7">
            <div className="py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
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
                <div className="mt-8 gap-3 flex justify-center">
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
