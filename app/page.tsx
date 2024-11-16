import { Button } from "@/components/ui/button";


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
            {/* Grid */}
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3">
                <div className="container py-10 lg:py-16">
                  <div className="max-w-2xl text-center mx-auto">
                    <p className="">Elevate your projects</p>
                    {/* Title */}
                    <div className="mt-5 max-w-2xl">
                      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Beautiful UI Blocks
                      </h1>
                    </div>
                    {/* End Title */}
                    <div className="mt-5 max-w-3xl">
                      <p className="text-xl text-muted-foreground">
                        Over 10+ fully responsive, UI blocks you can drop into your
                        Shadcn UI projects and customize to your heart&apos;s content.
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
              {/* End Col */}
              <div className="lg:col-span-4 mt-10 lg:mt-0">
                Hello
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Hero */}
      </>
    </div>
  );
}
