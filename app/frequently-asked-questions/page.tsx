import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full flex-col items-center p-6">
        <h2 className="mb-4 text-xl font-semibold">Welcome to Our Platform</h2>
        <p className="text-gray-400">
          Our mission is to provide awareness and support against online frauds.
          Explore our resources and find ways to protect yourself or report
          fraud effectively.
        </p>
      </div>
      <div className="lg:flex lg:justify-between">
        <div className="w-full lg:px-3">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the purpose of this platform?
              </AccordionTrigger>
              <AccordionContent>
                Our platform aims to create awareness about online frauds and
                provide individuals with the tools to report scams, access
                fraud-related information, and seek support against fraud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How can I report a fraud?</AccordionTrigger>
              <AccordionContent>
                You can report a fraud by submitting an online complaint on our
                platform. Provide details such as the name, email address, phone
                number, and nature of the fraud for us to take appropriate
                action.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is there a fee to report a fraud?
              </AccordionTrigger>
              <AccordionContent>
                No, our support is completely free. We are committed to offering
                transparent and gratuitous assistance to all victims of online
                fraud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What happens after I report a fraud?
              </AccordionTrigger>
              <AccordionContent>
                After you report a fraud, we collect and verify the information
                provided. This data becomes part of our repository to help
                others stay vigilant and may be used to take further preventive
                actions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What types of fraud can I report?
              </AccordionTrigger>
              <AccordionContent>
                You can report all types of online fraud, including phishing
                scams, e-commerce fraud, fake domains, second-hand item scams,
                and fake social media profiles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How does the platform help prevent fraud?
              </AccordionTrigger>
              <AccordionContent>
                We offer pre-transaction due diligence services, including
                background checks, to verify the authenticity of parties you
                plan to transact with. This helps minimize the risk of falling
                victim to fraud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                How can I avoid online fraud while buying or selling?
              </AccordionTrigger>
              <AccordionContent>
                We provide guidance on safe buying and selling practices,
                Educating users on due diligence is a key part of our mission.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full lg:px-3">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Is the data I share confidential?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all information you provide is handled with strict
                confidentiality and used only for fraud prevention and reporting
                purposes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>
                How do you tackle phishing sites and fake domains?
              </AccordionTrigger>
              <AccordionContent>
                We actively track and report phishing sites, fake domains, and
                other malicious activities. and educate people using this
                platform to stay away from those.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>
                Can I access the repository of fraud information?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our repository of fraud reports is available on our
                website. This database helps users stay informed about ongoing
                scams and fraudulent entities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>
                How can I contribute to your cause?
              </AccordionTrigger>
              <AccordionContent>
                You can support us by volunteering, reporting frauds, and
                spreading awareness about our platform. Bringing public scams to
                our attention strengthens the fight against online fraud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger>
                When was this initiative launched?
              </AccordionTrigger>
              <AccordionContent>
                Our initiative against online frauds began in December 2024.
                Since then, we have been working towards creating a safer online
                environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger>Do you operate globally?</AccordionTrigger>
              <AccordionContent>
                yes. this web application user can access from anywhere in
                internet
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger>
                Are you a registered organization?
              </AccordionTrigger>
              <AccordionContent>
                We are not registered organization. its an just open source
                application help to search fraud information
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default page
