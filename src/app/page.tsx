import * as React from "react";
import { Avatar } from "radix-ui";

export default function Home() {
  return (
    <div className="h-svh bg-gray-600 py-8 px-10 font-sans">
      <div className="w-full h-full bg-gray-300 rounded-3xl text-white">
        <div className="flex flex-row w-full h-[10%] bg-gray-200 rounded-t-3xl p-3 items-center ">
          <div className="h-full items-center ">
            <Avatar.Root className="inline-flex size-[60px] select-none overflow-hidden rounded-full ml-10 ">
              <Avatar.Image
                className="size-full rounded-[inherit] object-cover"
                src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=600&h=400"
                alt="Colm Tuite"
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
      </div>
    </div>
  );
}
