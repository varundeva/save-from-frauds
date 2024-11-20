import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react"

const Features = () => {
  return (
    <div className="py-3 lg:py-4">
      <hr className="border-secondary" />
      <div className="mx-auto py-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Key Features
        </h2>

        {/* Flex Container */}
        <div className="flex flex-wrap -mx-3 py-10">
          {/* First Column */}
          <div className="w-full md:w-1/2 px-3 space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Fraud Protection
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We focus on detecting and reporting online fraud to protect
                  individuals. Our efforts help users stay informed and secure
                  from scams.{" "}
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Data Repository
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Our platform compiles crucial data on various fraud types for
                  easy access. This empowers users to recognize and avoid
                  potential threats.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Transparent Support
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We offer clear, straightforward assistance to victims of
                  fraud, with no hidden terms. Our goal is to help individuals
                  navigate fraud recovery with complete transparency.
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
                  Fraud Prevention
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Through comprehensive background checks, we verify the
                  authenticity of parties before transactions. This proactive
                  approach helps prevent online fraud before it happens.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Community Focused
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We actively track and take down phishing sites, fake domains,
                  and fraudulent social media profiles. Our work ensures a safer
                  online environment for everyone.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Empowering Users
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We educate individuals on how to avoid fraud when buying and
                  selling online. By providing resources, we help users make
                  informed, safe decisions.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Second Column */}
        </div>
        {/* End Flex Container */}
        <hr className="border-secondary" />
      </div>
    </div>
  )
}

export default Features
