import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services2 = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Get to know
          <br />
          Web 3.0
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Web 3 is an idea for a new iteration of the World Wide Web based on blockchain technology, which incorporates concepts such as decentralization and token-based economics.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Ownership"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Web3 is powered by blockchain technology and decentralization, democratizing content creation and eliminating the middleman. Here you are the owner."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Security"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Unlike the current system, where information can easily be copied or stolen without the user knowing, blockchain technology is secure and tamperproof; data cannot be changed or hacked without the interference being detected"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="A New Way"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Web3 runs on a DAO (Decentralized Autonomous Organization), a new management model without boards and executives. DAOs instead operate according to a set of rules written in code."
        />
      </div>
    </div>
  </div>
);

export default Services2;
