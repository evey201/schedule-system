import React from "react";
import { GamePresenter, scheduleArrayMorning } from './ScheduleArray'
import { Tooltip } from "@mui/material";
import { Divider } from "./DashBoard.styled";

const GamePresenterList: React.FC = () => {
 
  return (
    <>
        {
            scheduleArrayMorning?.map((item) => (
                <div className="flex flex-col w-full gap" key={item.id}>
                <div className="flex gap-8 items-start">
                    <div className="flex flex-col w-full text-gray-400 items-start">
                            <div className="flex flex-col w-full gap-2 pt-2">
                                    <div className="">
                                        <details
                                            className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                                        >
                                            <summary
                                            className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                                            >
                                            <h2 className="font-medium">
                                                {item?.currentHour}
                                            </h2>

                                            <span className="relative h-5 w-5 shrink-0">
                                                <svg
                                                    className="h-5 w-5 shrink-0 transition duration-500 text-primary-500 group-open:-rotate-180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </span>
                                            </summary>
                                            <div className="flex flex-col w-full justify-between items-center mt-4">
                                                {
                                                    item.assignedTables.map((table) => (
                                                        <>
                                                            <div className="flex gap-y-8 items-center justify-between w-full my-2" key={table.id}>
                                                                <div className="flex gap-x-5">
                                                                    <p>{table?.startTime}</p>
                                                                    <span> &gt; </span>
                                                                    <p>{table?.endTime}</p>
                                                                </div>
                                                                <div className="flex flex-row-reverse [&>*:nth-child(n+1)]:-ml-3">
                                                                        <Tooltip title={`${table?.name} on table ${table?.tableNumber}`} placement="top" className="hover:cursor-pointer">
                                                                            <span className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-primary-500 hover:border-2 duration-500">
                                                                                <img src="https://th.bing.com/th/id/OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH?pid=ImgDet&rs=1" className="object-fit w-full"/>
                                                                            </span>
                                                                        </Tooltip>
                                                                </div>
                                                            </div>
                                                                <Divider />
                                                        </>
                                                    ))
                                                }
                                        </div>
                                        </details>
                                        </div>
                                        
                            </div>         
                    </div>
                </div>
            </div>
            ))
        }
    </>
  );
};

export default GamePresenterList;