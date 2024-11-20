import { Globe, Target } from "lucide-react"

const page = () => {
  return (
    <div className="container mx-auto space-y-8 p-6">
      <h1 className="text-xl font-bold">About Us</h1>
      {/* Introductory Paragraphs */}
      <div className="space-y-4">
        <p className="text-lg">
          Our platform is dedicated to helping individuals stay safe in an
          increasingly complex digital world. By providing a repository of
          scam-related information, we enable users to identify suspicious
          entities such as emails, phone numbers, and websites, empowering them
          to make informed decisions. Our extensive database is built on
          user-reported data, making it a reliable resource for anyone seeking
          to verify potential fraud and safeguard their personal and financial
          information.
        </p>
        <p className="text-lg ">
          We focus on education and awareness, giving users the tools and
          knowledge they need to recognize and avoid online fraud. Whether you
          are looking to verify a phone number, email, or website, our platform
          offers quick and accessible search tools to assist you. Through our
          data-driven approach, we aim to create a secure and trustworthy online
          environment for everyone, fostering a community that is vigilant and
          better equipped to deal with the evolving threats of the digital age.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        {/* Vision Card */}
        <div className="flex-1 rounded-lg py-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <Globe className="h-8 w-8" />
            <h2 className="text-xl font-bold">Our Vision</h2>
          </div>
          <p className="mt-4">
            To create a world where individuals navigate the digital landscape
            with confidence, armed with knowledge and resources to recognize and
            avoid online fraud. We envision a future where education and
            awareness empower everyone to stay safe and secure in an
            increasingly connected world.
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex-1 rounded-lg py-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <Target className="h-8 w-8" />
            <h2 className="text-xl font-bold">Our Mission</h2>
          </div>
          <p className="mt-4">
            To be the most trusted repository of scam-related information,
            enabling users to identify and avoid fraudulent activities. By
            providing a transparent platform for reporting and searching scam
            data, we aim to educate individuals and foster a vigilant and
            informed online community.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
