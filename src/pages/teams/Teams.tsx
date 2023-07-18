/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { withDashboard, Table, Loading, FormInput, Modal } from "../../components"
import {
    Divider
} from './Teams.styled'
import { useAuth, useModal } from "../../hooks";
import { isSuperAdmin } from "../../services";
import { Delete, Edit } from "@mui/icons-material";


interface FormData {
    id: number 
    email: string
    firstname: string
    lastname: string 
}

interface UserData {
    email: string;
}

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
    const [data, setData] = useState<{id: number, email: string; firstname: string; lastname: string }[]>([])
    const { state } = useAuth()
    const userData = state.data as UserData;
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true)
    const { showModal: modal, triggerModal: toggleModal } = useModal()
    const { showModal, triggerModal } = useModal()
    const [formData, setFormData] = useState<FormData>({ id:  Date.now(),  email: '', firstname: '', lastname: '' })
    const [editData, setEditData] = useState<FormData | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleEdit = (id: number) => {
        const dataToEdit = data.find((item) => item.id === id);
        if (dataToEdit) {
          setEditData(dataToEdit);
          triggerModal();
        }
    };
    const handleDelete =  (idToRemove: number): void=> {
        const res = data.filter((item) => item.id !== idToRemove);
        setData(res)

    } 

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
        {
            name: 'Actions',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRender: (value: any, updateValue: any) => {
                    const idToRemove = updateValue?.rowData[0] as number; 
                    return (
                        <>
                            <div className="flex">
                                <span onClick={() => handleEdit(idToRemove)}>
                                    <Edit />
                                </span>
                                <span onClick={() => handleDelete(idToRemove)}>
                                    <Delete />
                                </span>
                            </div>
                        </>
                    )
                }
            }
        }
    ];

    const handleSubmit =  (e: FormEvent<HTMLFormElement>): void=> {
        e.preventDefault()

        const email = userData?.email;
        if(!isSuperAdmin(email)) return setError('Unable to edit data')
        if (isSuperAdmin(email)) {
            dataArray.push({...formData})
            toggleModal()
        } 

    }
    
    const handleSubmitEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editData) {
            const editedData: FormData = {
              id: editData.id,
              email: e.currentTarget.email.value,
              firstname: e.currentTarget.firstname.value,
              lastname: e.currentTarget.lastname.value,
            };
            const dataIndex = data.findIndex((item) => item.id === editedData.id);
            if (dataIndex !== -1) {
            const updatedData = [...data];
            updatedData[dataIndex] = editedData;
            setData(updatedData);
            triggerModal();
            setEditData(null);
            }
        }
      };

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
            {/* Add user modal */}
            <Modal
                showModal={modal}
                triggerModal={toggleModal}
                title="Add Game Presenter"
                // fullScreen
                closable
                >
                <>
                    <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Email Address"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            // error={error}
                            placeholder="john@example.com"
                            required
                        />
                        <FormInput
                            label="First Name"
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            // error={error}
                            placeholder="Zlatan"
                            required
                        />
                        <FormInput
                            label="Last Name"
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            // error={error}
                            placeholder="Ibrahimovic"
                            required
                        />
                        <div className="flex w-full gap-x-4 items-center justify-end ">
                        <div className="mt-5">
                            <button className="inline-block rounded-lg bg-white border-2 border-primary-900 px-5 py-3 text-sm font-medium text-black w-full" onClick={toggleModal}>
                                Cancel
                            </button>
                        </div>
                        <div className="mt-5">
                            <button
                                className="inline-block rounded-lg bg-primary-900 px-5 py-3 text-sm font-medium text-white w-full"
                                // onClick={handleClick}
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </>
            </Modal>
            {/* Edit user modal */}
            <Modal
                showModal={showModal}
                triggerModal={triggerModal}
                title="Edit Game Presenter"
                // fullScreen
                closable
                >
                <>
                    <div className="mt-4">
                    <form onSubmit={handleSubmitEdit}>
                        <FormInput
                            label="Email Address"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            defaultValue={editData?.email}
                            // error={error}
                            placeholder="john@example.com"
                            required
                        />
                        <FormInput
                            label="First Name"
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            defaultValue={editData?.firstname}
                            // error={error}
                            placeholder="Zlatan"
                            required
                        />
                        <FormInput
                            label="Last Name"
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            defaultValue={editData?.lastname}
                            // error={error}
                            placeholder="Ibrahimovic"
                            required
                        />
                        <div className="flex w-full items-center gap-x-4 justify-end ">
                        <div className="mt-5">
                            <button className="inline-block rounded-lg bg-white border-2 border-primary-900 px-5 py-3 text-sm font-medium text-black w-full" onClick={toggleModal}>
                                Cancel
                            </button>
                        </div>
                        <div className="mt-5">
                            <button
                                className="inline-block rounded-lg bg-primary-900 px-5 py-3 text-sm font-medium text-white w-full"
                                // onClick={handleClick}
                                type="submit"
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