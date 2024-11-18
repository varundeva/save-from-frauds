
import { Truck, Mail, Lock, Phone, } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent, } from "@/components/ui/card";

const FraudAndCyberCrimePrevention = () => {
  const scamTypes = [
    {
      type: "Delivery Scams",
      icon: <Truck className="w-6 h-6 text-orange-500" />,
      description: "Fake delivery notices or fees to scam personal information.",
    },
    {
      type: "Phishing Emails",
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      description: "Emails pretending to be from legitimate sources to steal credentials.",
    },
    {
      type: "Ransomware",
      icon: <Lock className="w-6 h-6 text-purple-500" />,
      description: "Hackers lock your data and demand a ransom for its return.",
    },
    {
      type: "Digital Arrest Scams",
      icon: <Phone className="w-6 h-6 text-yellow-500" />,
      description: "Scammers impersonate police, threatening fake arrests for payment.",
    },
  ];

  const preventionTips = [
    "Use strong, unique passwords for each online account.",
    "Enable two-factor authentication (2FA) wherever possible.",
    "Be cautious when sharing personal information online.",
    "Do not click on suspicious email links or attachments.",
    "Ensure your devices are protected with up-to-date antivirus software.",
    "Use a VPN (Virtual Private Network) to secure your internet connection.",
    "Verify the legitimacy of any website before making purchases.",
    "Avoid using public Wi-Fi for sensitive transactions or activities.",
    "Check bank and credit card statements regularly for suspicious activity.",
    "Don't share sensitive information over the phone or on social media.",
    "Install security patches and updates regularly on your devices.",
    "Be wary of unsolicited phone calls or messages asking for personal details.",
    "Know the signs of phishing attempts, such as fake emails or websites.",
    "Educate yourself and your family members about common fraud schemes.",
    "Use strong encryption tools for sensitive communication and files.",
    "Back up important data regularly to secure storage solutions.",
    "Always log out of accounts when using shared or public computers.",
    "Be cautious with online offers that seem too good to be true.",
    "Check the legitimacy of job offers and investments before committing.",
    "Report any suspicious activities immediately to the authorities."
  ];

  const faqs = [
    {
      question: "What should I do if I suspect a scam?",
      answer: "Stop communication with the suspected scammer and report it to the authorities immediately."
    },
    {
      question: "How can I recognize phishing emails?",
      answer: "Look for poor grammar, urgent language, and generic greetings. Verify the sender's email address."
    },
    {
      question: "Is paying a ransom recommended?",
      answer: "No, paying a ransom does not guarantee recovery and may encourage further attacks."
    },
    {
      question: "What are the common types of online scams?",
      answer: "Phishing, delivery scams, digital arrest scams, and fake tech support scams are common types."
    },
    {
      question: "How do I protect my devices from ransomware?",
      answer: "Use up-to-date antivirus software, avoid opening suspicious attachments, and back up data regularly."
    },
    {
      question: "What is two-factor authentication (2FA)?",
      answer: "Two-factor authentication is an extra layer of security where you need two forms of verification, such as a password and a code sent to your phone."
    },
    {
      question: "How can I report an online scam?",
      answer: "You can report scams to the FBI's IC3, local authorities, or through dedicated anti-fraud websites."
    },
    {
      question: "How do I know if my personal information has been compromised?",
      answer: "Check your bank and credit card statements for unauthorized transactions. Use credit monitoring services to track your financial information."
    },
    {
      question: "What are digital arrest scams?",
      answer: "Scammers impersonate law enforcement, claiming you owe fines or taxes and threaten arrest unless you pay them immediately."
    },
    {
      question: "Should I click on links in unsolicited emails?",
      answer: "Never click on links in unsolicited emails. Always verify the legitimacy of the sender and the website before engaging."
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold ">Fraud & Cybercrime Prevention</h1>
        <p className="text-lg mt-2">
          Comprehensive information to keep you safe from modern scams.
        </p>
      </header>

      {/* Scam Types */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Types of Scams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scamTypes.map((scam, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center space-x-4">
                {scam.icon}
                <CardTitle className="text-lg font-bold">{scam.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{scam.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* Prevention Tips (Should take only as much space as its content) */}
        <div className="w-full md:w-1/2 mb-12 flex-shrink-0">
          <h2 className="text-2xl font-semibold mb-6">How to Stay Safe</h2>
          <div >
            <ul className="list-disc list-inside ">
              {preventionTips.map((tip, index) => (
                <li key={index} className="mb-2">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ with Accordion (Fills remaining space) */}
        <div className="w-full md:w-1/2 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                <AccordionItem value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FraudAndCyberCrimePrevention;
