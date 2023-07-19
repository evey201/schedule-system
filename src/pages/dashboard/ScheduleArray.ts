export interface GamePresenter {
    id?: number;
    shift: string;
    shiftStartTime: string;
    shiftEndTime: string;
    assignedTables: CasinoTable[];
    currentHour: string;
    assignedBreakSlots: BreakSlot[];
}
  
export interface CasinoTable {
    id: number;
    tableNumber: number;
    startTime: string;
    endTime: string;
    name: string,
}
  
interface BreakSlot {
    startTime: string;
    endTime: string;
    name: string,
    // assignedPresenter: GamePresenter;
}

export const scheduleArrayMorning: GamePresenter[] = [
    {
        id: 1,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '8:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Evey',
                startTime: '8:00',
                endTime: '8:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Peter',
                startTime: '8:00',
                endTime: '8:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Victor',
                startTime: '8:00',
                endTime: '8:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Julian',
                startTime: '8:20',
                endTime: '8:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Evey',
                startTime: '8:20',
                endTime: '8:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Peter',
                startTime: '8:20',
                endTime: '8:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Victor',
                startTime: '8:40',
                endTime: '9:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Julian',
                startTime: '8:40',
                endTime: '9:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Evey',
                startTime: '8:40',
                endTime: '9:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Julian',
                startTime: '8:00',
                endTime: '8:20'
            },
            {
                name: 'Victor',
                startTime: '8:20',
                endTime: '8:40'
            },
            {
                name: 'Peter',
                startTime: '8:40',
                endTime: '9:00'
            }
        ]
    },
    {
        id: 2,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '9:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Peter',
                startTime: '9:00',
                endTime: '9:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Victor',
                startTime: '9:00',
                endTime: '9:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Julian',
                startTime: '9:00',
                endTime: '9:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Evey',
                startTime: '9:20',
                endTime: '9:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Peter',
                startTime: '9:20',
                endTime: '9:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Victor',
                startTime: '9:20',
                endTime: '9:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Julian',
                startTime: '9:40',
                endTime: '10:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Evey',
                startTime: '9:40',
                endTime: '10:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Peter',
                startTime: '9:40',
                endTime: '10:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Evey',
                startTime: '9:00',
                endTime: '8:20'
            },
            {
                name: 'Julian',
                startTime: '9:20',
                endTime: '9:40'
            },
            {
                name: 'Victor',
                startTime: '9:40',
                endTime: '10:00'
            }
        ]
    },
    {
        id: 3,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '10:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Victor',
                startTime: '10:00',
                endTime: '10:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Julian',
                startTime: '10:00',
                endTime: '10:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Evey',
                startTime: '10:00',
                endTime: '10:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Peter',
                startTime: '10:20',
                endTime: '10:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Victor',
                startTime: '10:20',
                endTime: '10:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Julian',
                startTime: '10:20',
                endTime: '10:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Evey',
                startTime: '10:40',
                endTime: '11:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Peter',
                startTime: '10:40',
                endTime: '11:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Victor',
                startTime: '10:40',
                endTime: '11:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Peter',
                startTime: '10:00',
                endTime: '10:20'
            },
            {
                name: 'Evey',
                startTime: '10:20',
                endTime: '10:40'
            },
            {
                name: 'Julian',
                startTime: '10:40',
                endTime: '11:00'
            }
        ]
    },
    {
        id: 4,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '11:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Julian',
                startTime: '11:00',
                endTime: '11:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Evey',
                startTime: '11:00',
                endTime: '11:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Peter',
                startTime: '11:00',
                endTime: '11:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Victor',
                startTime: '11:20',
                endTime: '11:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Julian',
                startTime: '11:20',
                endTime: '11:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Evey',
                startTime: '11:20',
                endTime: '11:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Peter',
                startTime: '11:40',
                endTime: '12:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Victor',
                startTime: '11:40',
                endTime: '12:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Julian',
                startTime: '11:40',
                endTime: '12:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Victor',
                startTime: '11:00',
                endTime: '11:20'
            },
            {
                name: 'Peter',
                startTime: '11:20',
                endTime: '11:40'
            },
            {
                name: 'Evey',
                startTime: '11:40',
                endTime: '12:00'
            }
        ]
    },
    {
        id: 5,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '12:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Evey',
                startTime: '12:00',
                endTime: '12:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Peter',
                startTime: '12:00',
                endTime: '12:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Victor',
                startTime: '12:00',
                endTime: '12:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Julian',
                startTime: '12:20',
                endTime: '12:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Evey',
                startTime: '12:20',
                endTime: '12:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Peter',
                startTime: '12:20',
                endTime: '12:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Victor',
                startTime: '12:40',
                endTime: '13:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Julian',
                startTime: '12:40',
                endTime: '13:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Evey',
                startTime: '12:40',
                endTime: '13:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Julian',
                startTime: '12:00',
                endTime: '12:20'
            },
            {
                name: 'Victor',
                startTime: '12:20',
                endTime: '12:40'
            },
            {
                name: 'Peter',
                startTime: '12:40',
                endTime: '13:00'
            }
        ]
    },
    {
        id: 6,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '13:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Peter',
                startTime: '13:00',
                endTime: '13:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Victor',
                startTime: '13:00',
                endTime: '13:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Julian',
                startTime: '13:00',
                endTime: '13:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Evey',
                startTime: '13:20',
                endTime: '13:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Peter',
                startTime: '13:20',
                endTime: '13:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Victor',
                startTime: '13:20',
                endTime: '13:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Julian',
                startTime: '13:40',
                endTime: '14:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Evey',
                startTime: '13:40',
                endTime: '14:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Peter',
                startTime: '13:40',
                endTime: '14:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Evey',
                startTime: '13:00',
                endTime: '13:20'
            },
            {
                name: 'Julian',
                startTime: '13:20',
                endTime: '13:40'
            },
            {
                name: 'Victor',
                startTime: '13:40',
                endTime: '14:00'
            }
        ]
    },
    {
        id: 7,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '14:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Victor',
                startTime: '14:00',
                endTime: '14:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Julian',
                startTime: '14:00',
                endTime: '14:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Evey',
                startTime: '14:00',
                endTime: '14:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Peter',
                startTime: '14:20',
                endTime: '14:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Victor',
                startTime: '14:20',
                endTime: '14:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Julian',
                startTime: '14:20',
                endTime: '14:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Evey',
                startTime: '14:40',
                endTime: '15:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Peter',
                startTime: '14:40',
                endTime: '15:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Victor',
                startTime: '14:40',
                endTime: '15:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Peter',
                startTime: '14:00',
                endTime: '14:20'
            },
            {
                name: 'Evey',
                startTime: '14:20',
                endTime: '14:40'
            },
            {
                name: 'Julian',
                startTime: '14:40',
                endTime: '15:00'
            }
        ]
    },
    {
        id: 8,
        shift: 'morning',
        shiftStartTime: '8:00',
        shiftEndTime: '16:00',
        currentHour: '15:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Julian',
                startTime: '15:00',
                endTime: '15:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Evey',
                startTime: '15:00',
                endTime: '15:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Peter',
                startTime: '15:00',
                endTime: '15:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Victor',
                startTime: '15:20',
                endTime: '15:40'
            },
            {
                id: 4,
                tableNumber: 2,
                name: 'Julian',
                startTime: '15:20',
                endTime: '15:40'
            },
            {
                id: 5,
                tableNumber: 3,
                name: 'Evey',
                startTime: '15:20',
                endTime: '15:40'
            },
            {
                id: 6,
                tableNumber: 1,
                name: 'Peter',
                startTime: '15:40',
                endTime: '16:00'
            },
            {
                id: 7,
                tableNumber: 2,
                name: 'Victor',
                startTime: '15:40',
                endTime: '16:00'
            },
            {
                id: 8,
                tableNumber: 3,
                name: 'Julian',
                startTime: '15:40',
                endTime: '16:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Victor',
                startTime: '15:00',
                endTime: '15:20'
            },
            {
                name: 'Peter',
                startTime: '15:20',
                endTime: '15:40'
            },
            {
                name: 'Evey',
                startTime: '15:40',
                endTime: '16:00'
            }
        ]
    },
]