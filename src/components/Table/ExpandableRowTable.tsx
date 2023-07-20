import { Tooltip } from "@mui/material";


interface CasinoTable {
  id: number;
  tableNumber: number;
  startTime: string;
  endTime: string;
  name: string,
}

type Props = {
  Data: CasinoTable[]
}

export const CollapsibleTable = ({ Data }: Props) => {
  return (
    <div className="w-full">
        <div className="mt-2">
                <table className="min-w-full">
                <thead className="">
                <tr className="">
                    <th className="font-medium text-left text-gray-900">
                    Start - End time
                    </th>
                    <th className="font-medium text-gray-900">
                    Table Number
                    </th>
                    <th className="font-medium text-gray-900">
                      Name
                    </th>
                    <th className="font-medium text-right text-gray-900">
                      Avatar
                    </th>
                </tr>
                </thead>
                <tbody className="text-gray-400">
                  {
                    Data?.map((item, index) => (
                        <tr className="items-center" key={index}>
                            <td className="whitespace-nowrap  py-2 font-medium">
                            <div className="flex gap-x-2">
                              <p>{item?.startTime}</p>
                              <span> - </span>
                              <p>{item?.endTime}</p>
                            </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 ">{item.tableNumber}</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                { item.name }
                            </td>
                            <td className="whitespace-nowrap py-2  self-end">
                              <div className="flex sm:flex-row-reverse [&>*:nth-child(n+1)]:-ml-3">
                                <Tooltip title={`${item?.name} on table ${item?.tableNumber}`} placement="top" className="hover:cursor-pointer">
                                  <span className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-primary-500 hover:border-2 duration-500">
                                      {/* <img src={`https://th.bing.com/th/id/OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH?pid=ImgDet&rs=${index}`} className="object-fit w-full"/> */}
                                      <img src={`https://robohash.org/${item?.name}?set=set2&size=180x180`} className="object-fit w-full"/>
                                  </span>
                                </Tooltip>
                              </div>
                            </td>
                        </tr>
                    ))
                  }
                </tbody>
                </table>
      </div>             

    </div>
  );
}
