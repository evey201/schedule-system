export const dataArray: { id: number, email: string; firstname: string; lastname: string; status: boolean }[] = [
    {
        id: 1,  
        email: "evey@gmail.com",
        firstname: "Evey",
        lastname: "Alabi",
        status: true
    },
    {
        id: 2,
        email: 'peter@gmail.com',
        firstname: 'Peter',
        lastname: 'Alabi',
        status: true
    },
    {
        id: 3,
        email: 'victor@gmail.com',
        firstname: 'Victor',
        lastname: 'Alabi',
        status: true
    },
    {
        id: 4,
        email: 'julian@gmail.com',
        firstname: 'Julian',
        lastname: 'Alabi',
        status: false
    },
];

export const TableArray: { id: number, tableNumber: number; tableName: string; name: string}[] = [
    {
        id: 1,  
        tableNumber: 1,
        tableName: "Baccarat",
        name: "Evey Alabi",
    },
    {
        id: 2,
        tableNumber: 2,
        tableName: "Blackjack",
        name: "Peter Alabi",
    },
    {
        id: 3,
        tableNumber: 3,
        tableName: "Roulette",
        name: "Victor Alabi",
    }
];

export const scheduleArray: { id: number, shift: string; shiftStartTime: string; shiftEndTime: string; person: {  tableNumber?: number; presenterName: string; presenterId: number; onBreak?: boolean }[]; startTime: string; endTime: string; }[] = [
    {
        id: 1,
        shift: 'morning',
        shiftStartTime: "08:00",
        shiftEndTime: "16:00",
        startTime: "08:00",
        endTime: "08:20",
        person: [
            {
                presenterId: 1,
                presenterName: 'Evey',
                tableNumber: 1
            },
            {
                presenterId: 2,
                presenterName: 'Julian',
                tableNumber: 2
            },
            {
                presenterId: 3,
                presenterName: 'Peter',
                tableNumber: 3
            },
            {
                presenterId: 4,
                presenterName: 'Victor',
                onBreak: true
            },
        ]

    }
]