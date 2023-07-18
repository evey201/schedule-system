"use client"

import { Link } from "react-router-dom"
import { TabbedComponent, withDashboard, ScheduleComponent } from "../../components"
import { Divider } from "./DashBoard.styled"

const tabs = [
    { id: 1,  content: <ScheduleComponent /> },
    { id: 2, title: 'Tab 1', content: 'Content for Tab 1' },
    { id: 3, title: 'Tab 2', content: 'Content for Tab 2' },
    { id: 4, title: 'Tab 3', content: 'Content for Tab 3' },
    { id: 5, title: 'Tab 4', content: 'Content for Tab 4' },
];

export const Dashboard = withDashboard(() => {
    return (
        <>
            <div className="p-5">
                <div>
                    <h2 className="text-2xl text-neutral-700">Dashboard</h2>
                </div>
                <Divider />
                <div className="flex justify-between gap-x-8 mt-8">
                    <div className="w-full">
                        <div className="bg-white p-4 px-4 rounded-md">
                            <TabbedComponent tabs={tabs}/>
                        </div>
                    </div>
                    <div className="w-full md:flex flex-col hidden">
                        <div className="bg-white p-4 px-8 rounded-md">
                            <div className="flex justify-between mb-1">
                                <h3>Game Presenters</h3>
                                <div>
                                    <Link className="text-primary-500 underline" to="/teams">View all</Link>
                                </div>
                            </div>
                            <Divider />
                            <div className="mt-2">
                                <table className="min-w-full bg-white text-sm">
                                <thead className="text-left">
                                <tr className="bg-neutral-50">
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Presenter
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Email
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Status
                                    </th>
                                </tr>
                                </thead>

                                <tbody className="">
                                <tr className="">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                    John Doe
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">24/05/1995</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">Web Developer</td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                    Jane Doe
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">04/11/1980</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">Web Designer</td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                    Gary Barlow
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">24/05/1995</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">Singer</td>
                                </tr>
                                </tbody>
                                </table>
                            </div>             
                        </div>
                        <div className="bg-white p-4 px-8 mt-6 rounded-md">
                            <div className="flex justify-between mb-1">
                                <h3>Game Tables</h3>
                                <div>
                                    <Link className="text-primary-500 underline" to="/game-tables">View all</Link>
                                </div>
                            </div>
                            <Divider />
                            <div className="mt-2">
                                <table className="min-w-full bg-white text-sm">
                                <thead className="text-left mb-2">
                                <tr className="bg-neutral-50">
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Table Name
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Table Number
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Presenter
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="mt-2">
                                <tr className="">
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">24/05/1995</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">Web Developer</td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                    John Doe
                                    </td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">04/11/1980</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">Web Designer</td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                    Jane Doe
                                    </td>
                                </tr>

                                <tr className="">
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">24/05/1995</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-neutral-700">Singer</td>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                    Gary Barlow
                                    </td>
                                </tr>
                                </tbody>
                                </table>
                            </div>             
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})