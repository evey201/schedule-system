import { useEffect, useState } from "react"
import { withDashboard, Table, Loading } from "../../components"
import {
    Divider
} from './Teams.styled'


const dataArray: { id: number, email: string; firstname: string; lastname: string }[] = [
    {
        id: 1,  
        email: "evey@gmail.com",
        firstname: "Evey",
        lastname: "Alabi",
    },
    {
        id: 2,
        email: 'peter@gmail.com',
        firstname: 'Peter',
        lastname: 'Alabi',
    },
    {
        id: 3,
        email: 'victor@gmail.com',
        firstname: 'Victor',
        lastname: 'Alabi',
    },
    {
        id: 4,
        email: 'julian@gmail.com',
        firstname: 'Julian',
        lastname: 'Alabi',
    },
  ];

export const Teams = withDashboard(() => {
    const [data, setData] = useState<{ email: string; firstname: string; lastname: string }[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    
    const columns = [
        {
            name: "id",
            label: "id",
            options: {
            filter: true,
            sort: true,
            display: false
            }
        },
        {
          name: "firstname",
          label: "First Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "lastname",
          label: "Last Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
            name: "email",
            label: "Email",
            options: {
              filter: true,
              sort: true,
            },
        },
    ];

    useEffect(() => {
        setLoading(true)
        setData(dataArray)
        setLoading(false)
    }, [])

    if (loading) {
        return <Loading fullscreen />
    }
    return (
        <>
            <div  className="p-5">
                <div>
                    <h2 className="text-2xl text-neutral-700">Game Presenters</h2>
                </div>
                <Divider />
                <div className="sm:mt-5 mt-2 bg-white h-full w-full px-10 py-10 rounded-md">
                    <Table columns={columns} title="Game Presenters" data={data}/>
                </div>
            </div>
        </>
    )
})