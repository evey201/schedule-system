import { Tooltip } from "@mui/material";


export const ScheduleComponent = () => {
    return ( 
        <>
            <div className="flex flex-col w-full gap">
                <div className="flex gap-8 items-start">
                    <div className="flex text-gray-400 items-start">
                        <p>09:00</p>
                    </div>
                    <div className="flex flex-col w-full gap-2 pt-2">
                        {/* <hr className="w-full h-[2px] bg-gray-300 border-none opacity-40"/> */}
                        <div className="h-[60px] border-2 border-primary-500 bg-neutral-300 w-full rounded-[14px] px-4 py-2 flex gap-3 justify-between items-center">
                        <div className="flex gap-3">
                        <input
                            type="checkbox"
                            id="SelectAll"
                            className="h-5 w-5 rounded border-gray-300"
                        />
                            <div className="flex gap-5">
                                <p>12:00</p>
                                <span> &gt; </span>
                                <p>13:00</p>
                            </div>
                        </div>
                            <div className="flex flex-row-reverse [&>*:nth-child(n+1)]:-ml-3">
                                <Tooltip title='Evey on table 1' placement="top" className="hover:cursor-pointer">
                                    <span className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-primary-500 hover:border-2 duration-500">
                                        <img src="https://th.bing.com/th/id/OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH?pid=ImgDet&rs=1" className="object-fit w-full"/>
                                    </span>
                                </Tooltip>
                                <span className="w-10 h-10  rounded-full overflow-hidden border-2 border-gray-300">
                                    <img src="https://th.bing.com/th/id/OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH?pid=ImgDet&rs=1" className="object-fit w-full"/>
                                </span>
                                <span className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                                    <img src="https://th.bing.com/th/id/OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH?pid=ImgDet&rs=1" className="object-fit w-full"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}