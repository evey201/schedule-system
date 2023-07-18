import { useEffect, useState } from "react"
import { withDashboard, Table, Loading, FormInput, Modal } from "../../components"
import {
    Divider
} from './GameTables.styled'
import { useModal } from "../../hooks";


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

export const GameTables = withDashboard(() => {
    const [data, setData] = useState<{ email: string; firstname: string; lastname: string }[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const { showModal: modal, triggerModal: toggleModal } = useModal()
    
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
                <Modal
                showModal={modal}
                triggerModal={toggleModal}
                title="Add Game Presenter"
                // fullScreen
                closable
            >
                <>
                    <div className="mt-4">
                    <form>
                        <FormInput
                            label="Email Address"
                            type="email"
                            name="email"
                            // onChange={handleChange}
                            // error={error}
                            placeholder="john@example.com"
                        />
                        <FormInput
                            label="First Name"
                            type="text"
                            name="firstname"
                            // onChange={handleChange}
                            // error={error}
                            placeholder="Zlatan"
                        />
                        <FormInput
                            label="Last Name"
                            type="text"
                            name="text"
                            // onChange={handleChange}
                            // error={error}
                            placeholder="Ibrahimovic"
                        />
                        <div className="flex w-2/4 justify-end items-center justify-around">
                        <div className="mt-5">
                            <button className="inline-block rounded-lg bg-white border-2 border-primary-900 px-5 py-3 text-sm font-medium text-black w-full" onClick={toggleModal}>
                                Cancel
                            </button>
                        </div>
                        <div className="mt-5">
                            <button
                                className="inline-block rounded-lg bg-primary-900 px-5 py-3 text-sm font-medium text-white w-full"
                                // onClick={handleClick}
                            >
                                Submit
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </>
            </Modal>
            <div className="p-5">
                <div>
                    <h2 className="text-2xl text-neutral-700">Game Presenters</h2>
                </div>
                <Divider />
                <div className="flex flex-col sm:mt-5 mt-2 bg-white h-full w-full px-10 py-10 rounded-md">
                    <div className="w-fit self-end mb-4">
                    <button
                        onClick={toggleModal}
                        className="inline-block rounded-lg bg-primary-900 px-5 py-3 text-sm font-medium text-white w-full"
                    >
                        Add Game Presenter
                    </button>
                    </div>
                    <Table columns={columns} title="Game Presenters" data={data}/>
                </div>
            </div>
        </>
    )
})