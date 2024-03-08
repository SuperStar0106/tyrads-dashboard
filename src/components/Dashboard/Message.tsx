import React, { useState } from "react";
import Image from "next/image";

const MessageCard: React.FC = () => {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "other" }[]
  >([]);
  const [input, setInput] = useState<string>("");
  const userImage = "/images/user/user-01.png";
  const otherUserImage = "/images/user/user-08.png";
  const messageBackgroundImage = "/images/dashboard/right-message.jpg";

  const handleSend = () => {
    if (input.trim() !== "") {
      const newMessage: { text: string; sender: "user" | "other" } = {
        text: input,
        sender: messages.length % 2 === 0 ? "user" : "other",
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const handleEmoji = () => {
    console.log("Emoji button clicked");
  };

  const handleFileUpload = () => {
    console.log("File upload button clicked");
  };

  return (
    <div className="col-span-12 sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-l-none border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="justify-between gap-4 sm:flex pb-3">
        <h4 className="text-sm font-semibold text-black dark:text-white">
          Esther Howard
        </h4>
      </div>
      <div className="flex flex-col h-full">
        <div className="flex antialiased text-gray-800">
          <div
            className="flex flex-row h-full w-full overflow-x-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex flex-col flex-auto h-full">
              <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full">
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-12 gap-y-2">
                      <div className="col-start-1 col-end-8 p-3 rounded-lg">
                        <div className="flex flex-row items-center">
                          <Image
                            src={userImage}
                            width={40}
                            height={40}
                            alt="UserA"
                          />
                          <div className="relative ml-3 text-sm bg-white dark:bg-slate-800 py-2 px-4 shadow rounded-xl">
                            <div>Hey How are you today?</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-start-6 col-end-13 p-3 rounded-lg">
                        <div className="flex items-center justify-start flex-row-reverse">
                          <Image
                            src={otherUserImage}
                            width={40}
                            height={40}
                            alt="UserA"
                          />
                          <div className="relative mr-3 text-sm bg-indigo-100 dark:bg-slate-700 py-2 px-4 shadow rounded-xl">
                            <div>Im ok what about you?</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center h-16 rounded-xl w-full">
                  <div className="flex-grow ml-4 w-full">
                    <div className="relative w-full bg-slate-200 dark:bg-slate-900 rounded-xl">
                      <input
                        type="text"
                        placeholder="Type your message"
                        className="flex w-full rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 bg-slate-200 dark:bg-slate-900"
                      />
                      <div className="flex justify-between mr-2 ml-2 pb-3">
                        <div className="flex items-center">
                          <button className="flex items-center justify-center h-full w-7 right-0 top-0 text-gray-400 hover:text-gray-600">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </button>
                          <button className="flex items-center justify-center h-full w-7 right-0 top-0 text-gray-400 hover:text-gray-600">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                          <span>Send now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
