"use client";
import { scroll, motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Message from "../ui/message";

export default function Home() {
  // scroll((progress: Number) => console.log(progress));
  return (
    <div className="scroll-smooth">
      <div className="w-full h-16 bg-black"></div>
      <div
        className="w-full min-h-screen bg-cover bg-top h-[400vh]"
        style={{ backgroundImage: "url('/images/Background.jpg')" }}
      >
        <div className=" flex justify-center items-center">
          <div className="flex flex-col h-[77%] w-[60%] my-1 overflow-scroll sm:p-10 snap-y snap-mandatory">
            <div className="pt-44">
              <Message
                text="Do you remember this place?"
                align="start"
                bgColor="#5566ff92"
              />
            </div>
            <Message text="Of course not" align="start" bgColor="#5566ff92" />
            <Message
              text="I just had it renovated"
              align="start"
              bgColor="#5566ff92"
            />
            <Message text="What's in it?" align="end" bgColor="#955cff9d" />
            <Message
              text="Nothing much. Just storage for now"
              align="start"
              bgColor="#5566ff92"
            />
            <Message
              text="You are welcome to explore, of course..."
              align="start"
              bgColor="#5566ff92"
            />
          </div>
        </div>
        <div className="bg-opacity-30 h-[80svh]">{/* Play sound? */}</div>
        <div className="bg-opacity-30 h-screen pt-96"></div>
      </div>
    </div>
  );
}
