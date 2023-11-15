import React, { useState } from 'react';
import BeenhereIcon from '@mui/icons-material/Beenhere';


const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex items-center">
        {/* Logo (Replace 'YourLogo.png' with your actual logo image source) */}
        <img src="/src/static/Gain.png" alt="Logo" className="h-8 w-auto mr-4" />

        {/* Optional: Site Title */}
        {/* <h1 className="text-xl font-bold">Your Site Title</h1> */}
      </div>
    </header>
  );
};
const InstructorsSection = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Instructors have previous experience at:</h2>

        {/* Logos */}
        <div className="flex justify-center items-center space-x-8 mt-8 mb-8">
          {/* Replace the following with your actual logos */}
          <img src="/static/msft.webp" alt="Logo 1" className="h-12 w-auto" />
          <img src = "/static/duke.png" alt="Logo 2" className="h-12 w-auto" />
          <img src = "/static/duke.png" alt="Logo 2" className="h-12 w-auto" />
          <img src="/static/SAP.png" alt="Logo 3" className="h-12 w-auto" />
          <img src="/static/choise.jpeg" alt="Logo 4" className="h-12 w-auto" />
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className="mb-4">
      <div
        className="cursor-pointer border-b border-gray-300 pb-2"
        onClick={toggleAccordion}
      >
        <strong>{question}</strong>
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

const EmailSignupCard = () => {
  return (
    <div className="bg-blue-500 text-white p-8">
      <div className="container ">
        <h2 className="text-3xl font-bold mb-4">Join the Waitlist Today</h2>
        <p className="text-gray-300 mb-4">Stay updated and get priority access to our 4-week online course.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email here"
            className="flex-1 rounded-l-md p-2 focus:outline-none"
          />
          <button className="bg-white text-blue-500 rounded-r-md p-2 hover:bg-gray-200 transition duration-300">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const faqs = [
    {
      question: 'What is the course schedule?',
      answer: 'TBD',
    },
    {
      question: 'Do I need to know anything about cryptocurrency or DeFi?',
      answer: 'A basic understanding of cryptocurrency is a nice to have, but not a requirement.',
    },
    {
      question: 'I don’t own any cryptocurrencies, can I still join this course?',
      answer: 'Yes. You don’t need to own any cryptocurrencies.',
    },
    {
      question: 'Can you help me manage my portfolio?',
      answer: 'We are not investment experts or investment advisors. Unfortunately, we cannot coach you on your investment decisions. However, we can offer guidance on the best tools and products you can use to maximize your yields.',
    },
    {
      question: 'Do I need to own a hardware wallet?',
      answer: 'A hardware wallet is an excellent idea and we strongly recommend it. However, it is not a prerequisite for this course.',
    },
    {
      question: 'How do I get in touch with my peers or my instructor between sessions?',
      answer: 'You will be invited to a Discord server with other members from your cohort where you can pose questions and engage with the community.',
    },
    {
      question: 'Do you offer office hours?',
      answer: 'Yes. We post office hours on our Discord server. We are also quite active outside of office hours.',
    },
    {
      question: 'How engaged is the community?',
      answer: '>80% attendees usually stick around for up to an hour after each session. They get to engage with us and with each other in an open and casual manner. The community is also very engaged on Discord. We share investment opportunities and job opportunities with one another.',
    },
    {
      question: 'Are videos and slides from the presentation made available?',
      answer: 'Yes, videos and slides are available to all registrants.',
    },
    {
      question: 'What is the homework like?',
      answer: 'Homework tends to be light - approximately 15-20 minutes of homework between sessions. They serve as prerequisites for the next session.',
    },
  ];

  return (
    <div>
     
    <Header />
      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto py-16">

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-700 mb-2">Crypto Investor's Masterclass</h1>
            <p className="mt-4 text-lg text-gray-600">Course overview: Embark on a 4-week journey with our Advanced Crypto Investing Course, a hands-on workshop designed to elevate your expertise in navigating the dynamic landscape of crypto investments. Join seasoned professionals who will guide you through the complexities of advanced strategies and cutting-edge techniques. Gain the knowledge and skills to optimize your crypto portfolio, delve into on-chain trading of traditional assets, and explore sophisticated mining, staking, and MEV strategies. Become a crypto-savvy investor and unlock the potential for significant returns in the ever-evolving world of digital assets. Your path to advanced crypto mastery starts here</p>
          </div>

          {/* Who is this for Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Who is this for?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <BeenhereIcon fontSize="large" color="primary" /> 
                <p className="font-bold"> Traditional Finance Background</p>
                <p >You have background in either in banking, private equity, IB, Wealth Managment or other Trad-Fi</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
              <BeenhereIcon fontSize="large" color="primary" /> 
                <p className="font-bold">Crypto Novice</p>
                <p >You have some interest and background in crypto but you want to take your skills to the next level</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
              <BeenhereIcon fontSize="large" color="primary" /> 
                <p className="font-bold">Seeking Passive Income</p>
                <p >You are a sophisticated investor seeking to generate passive yield using crypto primitive products</p>
              </div>
            </div>
          </section>

          {/* Topics Covered Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Topics Covered</h2>
            <p className="text-lg">
              Our 4-week online course provides institutional-grade investing tactics for investors
              looking to grow their exposure to this growing asset class.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Setting up secure storage infrastructure</li>
              <li>DeFi trading techniques utilizing lending protocols and derivatives</li>
              <li>Optimizing returns through advanced mining, staking, and MEV</li>
              <li>On-chain trading of traditional asset classes</li>
              <li>Navigating tax and legal implications</li>
            </ul>
          </section>
          <InstructorsSection />
          {/* Testimonials Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">See What Others Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"I learned so much from this course! Highly recommended."</p>
                <p className="font-semibold">- John Doe</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"The instructors are experts in the field. Great value for the investment."</p>
                <p className="font-semibold">- Jane Smith</p>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">"This course demystified crypto for me. Now I feel confident navigating the space."</p>
                <p className="font-semibold">- Alan Johnson</p>
              </div>
            </div>
          </section>
         {/* Email Signup Section */}
      <EmailSignupCard />
          {/* FAQ Section */}
          <section className="mb-12 mt-4">
            <h2 className="text-3xl font-bold mb-4">FAQ</h2>
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </section>

          {/* Other content... */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


