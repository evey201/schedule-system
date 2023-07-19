"use client"

import { Link } from "react-router-dom"
import { TabbedComponent, withDashboard, ScheduleComponent, Loading } from "../../components"
import { Divider } from "./DashBoard.styled"
import { useEffect, useState } from "react";
import { dataArray, TableArray } from "./DataArray";
import { useAuth } from "../../hooks";
import GamePresenterList from "./GamePresenter";

const tabs = [
    { id: 1,  content: <GamePresenterList /> },
    { id: 2, title: 'Tab 1', content: 'Content for Tab 1' },
    { id: 3, title: 'Tab 2', content: 'Content for Tab 2' },
    { id: 4, title: 'Tab 3', content: 'Content for Tab 3' },
    { id: 5, title: 'Tab 4', content: 'Content for Tab 4' },
];

interface PresenterData {
    id: number 
    email: string
    firstname: string
    lastname: string 
    status: boolean
}

interface TableData {
    id: number, 
    tableNumber: number; 
    tableName: string;
    name: string
}
interface UserData {
    role: string
}

export const Dashboard = withDashboard(() => {
    const [presenters, setPresenters] = useState<PresenterData[]>()
    const [tableData, setTableData] = useState<TableData[]>()
    const [loading, isLoading] = useState<boolean>(true)
    const { state } = useAuth()
    const userData = state.data as UserData;
    const role = userData?.role;

    useEffect(() => {
        setTimeout(() => {
            isLoading(true)
            setPresenters(dataArray)
            setTableData(TableArray)
            isLoading(false)
        }, 1000);
    }, [])

    if (loading) return <Loading />

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
                                {role === 'manager' && (
                                    <div>
                                        <Link className="text-primary-500 underline" to="/teams">View all</Link>
                                    </div>
                                )}
                            </div>
                            <Divider />
                            <div className="mt-2">
                                {presenters && (
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
                                    {
                                        presenters.map((item) => (
                                            <tr className="" key={item?.id}>
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                                {item?.firstname} { item?.lastname }
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-neutral-700">{item?.email}</td>
                                                <td className="whitespace-nowrap px-4 py-2 text-neutral-700">
                                                {
                                                    item.status ? (
                                                        <span
                                                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700"
                                                        >
                                                            Live
                                                        </span>

                                                    ) : (
                                                        <span
                                                            className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700"
                                                        >
                                                            Break
                                                        </span>
                                                    )
                                                }
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                    </table>
                                )}
                            </div>             
                        </div>
                        <div className="bg-white p-4 px-8 mt-6 rounded-md">
                            <div className="flex justify-between mb-1">
                                <h3>Game Tables</h3>
                                {
                                    role === 'manager' && (
                                        <div>
                                            <Link className="text-primary-500 underline" to="/game-tables">View all</Link>
                                        </div>
                                    )
                                }
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
                                    {
                                        tableData?.map((item) => (
                                            <tr className="" key={item.id}>
                                                <td className="whitespace-nowrap px-4 py-2 text-neutral-700">{item.tableName}</td>
                                                <td className="whitespace-nowrap px-4 py-2 text-neutral-700">{item.tableNumber}</td>
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-neutral-700">
                                                    {item.name}
                                                </td>
                                            </tr>
                                        ))
                                    }
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