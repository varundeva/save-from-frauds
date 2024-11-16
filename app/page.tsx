import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrainCogIcon, BriefcaseIcon, FlowerIcon, HeartIcon, LightbulbIcon, MountainSnow, PackageIcon, SearchIcon, SettingsIcon, ThumbsUpIcon, TrophyIcon, UsersIcon, ZapIcon } from "lucide-react";


export default function Home() {
  return (
    <div>
     <>
  {/* Hero */}
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

    <div className="container relative z-10">
      {/* Flexbox Layout */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8 xl:gap-x-12">
        {/* Left Section */}
        <div className="lg:w-3/7">
          <div className="container py-10 lg:py-16">
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
                  Empower yourself with knowledge to prevent fraud and cybercrime. Join our community and learn how to protect your digital life.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"}>Report Frauds</Button>
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
  {/* End Hero */}
</>

      <>
      {/* Hero */}
      <div className="relative overflow-hidden container">
        <div className="container py-24 lg:py-32">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Knowledge is Your Best Defense
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
            Our application provides you with the tools and information you need to recognize potential threats, protect your personal data, and navigate the digital world with confidence.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* Form */}
              <form>
                <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                  <div className="flex-[1_0_0%]">
                    <Label htmlFor="article" className="sr-only">
                      Search frauds
                    </Label>
                    <Input
                      name="article"
                      className="h-full"
                      id="article"
                      placeholder="Search frauds"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Button size={"icon"}>
                      <SearchIcon />
                    </Button>
                  </div>
                </div>
              </form>
              {/* End Form */}
              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
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
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
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
            <div className="mt-10 sm:mt-20 flex flex-wrap gap-2 justify-center">
              <Button variant={"outline"}>
                <BriefcaseIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Business
              </Button>
              <Button variant={"outline"}>
                <SettingsIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Strategy
              </Button>
              <Button variant={"outline"}>
                <HeartIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Health
              </Button>
              <Button variant={"outline"}>
                <LightbulbIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Creative
              </Button>
              <Button variant={"outline"}>
                <FlowerIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Environment
              </Button>
              <Button variant={"outline"}>
                <MountainSnow className="flex-shrink-0 w-3 h-auto mr-2" />
                Adventure
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
    <>
  {/* Icon Blocks */}
  <div className="container pb-24 lg:pb-32">
    <div className="mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
        Key Features
      </h2>

      {/* Flex Container */}
      <div className="flex flex-wrap -mx-3">
        {/* First Column */}
        <div className="w-full md:w-1/2 px-3 space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex">
            <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Creative minds
              </h3>
              <p className="mt-1 text-muted-foreground">
                We choose our teams carefully. Our people are the secret to
                great work.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Effortless updates
              </h3>
              <p className="mt-1 text-muted-foreground">
                Benefit from automatic updates to all boards any time you need
                to make a change to your website.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Strong empathy
              </h3>
              <p className="mt-1 text-muted-foreground">
                We&apos;ve user tested our own process by shipping over 1k
                products for clients.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End First Column */}

        {/* Second Column */}
        <div className="w-full md:w-1/2 px-3 space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex">
            <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Conquer the best
              </h3>
              <p className="mt-1 text-muted-foreground">
                We stay lean and help your product do one thing well.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Designing for people
              </h3>
              <p className="mt-1 text-muted-foreground">
                We actively pursue the right balance between functionality
                and aesthetics, creating delightful experiences.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Simple and affordable
              </h3>
              <p className="mt-1 text-muted-foreground">
                From boarding passes to movie tickets, there&apos;s pretty
                much nothing you can&apos;t do.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Second Column */}
      </div>
      {/* End Flex Container */}
    </div>
  </div>
  {/* End Icon Blocks */}
</>

    </div>
  );
}
