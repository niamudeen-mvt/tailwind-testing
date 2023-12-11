import React, { useState } from "react";
import CustomContainer from "./layout/Container";
import { AiOutlineMenu } from "react-icons/ai";

const taskList = [
  {
    id: 1,
    title: "Reporting",
  },
  {
    id: 2,
    title: "Inventory",
  },
  {
    id: 3,
    title: "Contacts",
  },
];

const TaskSection = () => {
  const [activeTask, setActiveTask] = useState(1);
  console.log(activeTask);
  return (
    <section className="py-32">
      <CustomContainer>
        <div>
          <h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl font-medium mb-4 text-center">
            Simplify everyday business tasks.
          </h2>
          <p className="text-lg tracking-tight text-slate-700 max-w-2xl mx-auto text-center">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-8 gap-6">
            {taskList.map((task, i) => {
              return (
                <figure
                  className="bg-white mx-auto p-6 rounded-2xl flex justify-between flex-col gap-4 min-h-[250px]"
                  onClick={() => setActiveTask(task.id)}
                >
                  <AiOutlineMenu
                    className={`w-9 h-9 rounded cursor-pointer  text-white ${
                      activeTask === task.id ? "bg-blue-600" : "bg-slate-500"
                    }`}
                  />
                  <h3
                    className={`${
                      activeTask === task.id ? "text-blue-600 font-medium" : ""
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p className="text-xl text-slate-900">
                    Because you’d probably be a little confused if we suggested
                    you complicate your everyday business tasks instead.
                  </p>
                  <p className="text-sm tracking-tight text-slate-500">
                    Because you’d probably be a little confused if we suggested
                    you complicate your everyday business tasks instead.
                  </p>
                </figure>
              );
            })}
          </div>
          <div className="flex overflow-scroll mt-20">
            <div
              className={`flex transition-all duration-300 ${
                activeTask === 1
                  ? "translate-x-0"
                  : activeTask === 2
                  ? "-translate-x-full"
                  : "-translate-x-[200%]"
              }`}
            >
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=2048&q=75"
                alt="service-img"
                className="rounded-3xl h-full object-cover"
              />

              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&w=2048&q=75"
                alt="service-img"
                className="rounded-3xl h-full object-cover"
                s
              />

              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&w=2048&q=75"
                alt="service-img"
                className="rounded-3xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default TaskSection;
