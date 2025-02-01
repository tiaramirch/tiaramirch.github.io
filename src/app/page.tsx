"use client";
import React, { useState, useEffect } from "react";
import { Avatar } from "radix-ui";
import { SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Landing() {
  const router = useRouter();

  const sendPhrases = [
    "I am not typing these words",
    "Bring me to your website",
  ];
  const responses = [
    "Oh no",
    "Let me see what I can do about that",
    "It should work now!",
    "A 'please' would be nice...",
  ];

  const [showChat, setShowChat] = useState(false);
  const [stage, setStage] = useState(0);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputDisabled) {
      const userInput = event.target.value;
      if (stage == 0) {
        setMessages([
          {
            sender: "bot",
            text: "Keep typing until the send button turns purple",
          },
        ]);
        setInputValue(sendPhrases[0].slice(0, userInput.length));
      } else {
        setInputValue(userInput);
      }
    }
  };

  const handleSendMessage = () => {
    if (stage === 0 && inputValue === sendPhrases[0]) {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: sendPhrases[0] },
      ]);
      setInputValue("");
      setInputDisabled(true);
      setStage(1);
      startBotResponses();
    } else if (stage === 1 && inputValue.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: sendPhrases[1] },
      ]);
      setInputValue("");
      setInputDisabled(true);
      setStage(2);
      startFinalBotResponse();
    }
  };

  const startBotResponses = () => {
    let index = 0;

    const typeMessage = (message: string) => {
      let typedText = "";
      let charIndex = 0;

      setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

      const typingInterval = setInterval(() => {
        typedText += message[charIndex];
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            sender: "bot",
            text: typedText,
          };
          return newMessages;
        });

        charIndex++;

        if (charIndex === message.length) {
          clearInterval(typingInterval);
          index++;

          if (index < 3) {
            setTimeout(() => typeMessage(responses[index]), 1000);
          } else {
            setTimeout(() => setInputDisabled(false), 500);
          }
        }
      }, 60);
    };

    typeMessage(responses[0]);
  };

  const startFinalBotResponse = () => {
    let typedText = "";
    let charIndex = 0;

    setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

    const typingInterval = setInterval(() => {
      typedText += responses[3][charIndex];
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          sender: "bot",
          text: typedText,
        };
        return newMessages;
      });
      charIndex++;

      if (charIndex === responses[3].length) {
        clearInterval(typingInterval);
        setTimeout(() => router.push("/main"), 2000);
      }
    }, 50);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowChat(true);
    }, 4000);
  }, []);

  return (
    <div className="h-svh bg-[#1f1f2d] p-2 sm:py-8 sm:px-28 font-sans">
      {!showChat ? (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="text-white text-6xl font-bold h-full flex justify-center items-center"
        >
          ?
        </motion.span>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="h-full w-full"
        >
          {/* Chat UI here */}

          <div className="flex flex-col w-full h-full bg-gray-400 rounded-3xl text-white">
            {/* Contact */}
            <div className="flex flex-row w-full h-[10%] bg-gray-200 rounded-t-3xl items-center sm:px-3">
              <div className="flex h-full items-center ">
                <Avatar.Root className="inline-flex size-[40px] select-none overflow-hidden rounded-full ml-8 sm:ml-10 sm:size-[55px]">
                  <Avatar.Image
                    className="size-full rounded-[inherit] object-cover"
                    src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=600&h=400"
                    alt="Profile Picture"
                  />
                  <Avatar.Fallback
                    className="leading-1 flex size-full bg-white text-[15px] font-medium text-violet11"
                    delayMs={600}
                  >
                    CT
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>

              <div className="flex items-center ml-4 text-gray-800 text-xl font-semibold mt-1">
                Tiara Mirchandani
              </div>
            </div>

            {/* Chat window */}
            <div className="flex flex-col w-full h-[77%] p-3 my-1 overflow-scroll sm:p-10">
              {/* Render messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      message.sender === "user"
                        ? "bg-[#644e8c]"
                        : "bg-[#1f1f2d]"
                    } text-white rounded-3xl p-3 max-w-[70%] my-1`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Render current message being typed */}
              {currentMessage && (
                <div className="flex justify-start">
                  <div className="bg-[#1f1f2d] text-white rounded-3xl p-3 max-w-[70%]">
                    {currentMessage}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-row items-center justify-center w-full h-[11%] p-3">
              <div className="flex flex-row w-[90%] h-full bg-gray-300 rounded-2xl items-center p-1">
                <div className="w-[96%] h-full italic">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type something"
                    className="w-full h-full bg-transparent border-none focus:outline-none text-gray-500 pl-5"
                  />
                </div>
                <SendHorizontal
                  className={`${
                    inputValue === sendPhrases[0] || stage == 1
                      ? "text-[#7a5b8a] cursor-pointer"
                      : "text-gray-400 cursor-not-allowed"
                  } justify-end`}
                  onClick={handleSendMessage}
                  style={{
                    pointerEvents:
                      inputValue === sendPhrases[0] || stage == 1
                        ? "auto"
                        : "none",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
