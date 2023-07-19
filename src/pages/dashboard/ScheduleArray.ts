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
export const scheduleArrayAfternoon: GamePresenter[] = [
    {
        id: 1,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '16:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Evey',
                startTime: '16:00',
                endTime: '16:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Peter',
                startTime: '16:00',
                endTime: '16:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Victor',
                startTime: '16:00',
                endTime: '16:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Julian',
                startTime: '16:20',
                endTime: '16:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Evey',
                startTime: '16:20',
                endTime: '16:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Peter',
                startTime: '16:20',
                endTime: '16:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Victor',
                startTime: '16:40',
                endTime: '17:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Julian',
                startTime: '16:40',
                endTime: '17:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Evey',
                startTime: '16:40',
                endTime: '17:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Julian',
                startTime: '16:00',
                endTime: '16:20'
            },
            {
                name: 'Victor',
                startTime: '16:20',
                endTime: '16:40'
            },
            {
                name: 'Peter',
                startTime: '16:40',
                endTime: '17:00'
            }
        ]
    },
    {
        id: 2,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '17:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Peter',
                startTime: '17:00',
                endTime: '17:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Victor',
                startTime: '17:00',
                endTime: '17:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Julian',
                startTime: '17:00',
                endTime: '17:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Evey',
                startTime: '17:20',
                endTime: '17:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Peter',
                startTime: '17:20',
                endTime: '17:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Victor',
                startTime: '17:20',
                endTime: '17:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Julian',
                startTime: '17:40',
                endTime: '18:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Evey',
                startTime: '17:40',
                endTime: '18:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Peter',
                startTime: '17:40',
                endTime: '18:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Evey',
                startTime: '17:00',
                endTime: '17:20'
            },
            {
                name: 'Julian',
                startTime: '17:20',
                endTime: '17:40'
            },
            {
                name: 'Victor',
                startTime: '17:40',
                endTime: '18:00'
            }
        ]
    },
    {
        id: 3,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '18:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Victor',
                startTime: '18:00',
                endTime: '18:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Julian',
                startTime: '18:00',
                endTime: '18:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Evey',
                startTime: '18:00',
                endTime: '18:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Peter',
                startTime: '18:20',
                endTime: '18:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Victor',
                startTime: '18:20',
                endTime: '18:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Julian',
                startTime: '18:20',
                endTime: '18:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Evey',
                startTime: '18:40',
                endTime: '19:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Peter',
                startTime: '18:40',
                endTime: '19:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Victor',
                startTime: '18:40',
                endTime: '19:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Peter',
                startTime: '18:00',
                endTime: '18:20'
            },
            {
                name: 'Evey',
                startTime: '18:20',
                endTime: '18:40'
            },
            {
                name: 'Julian',
                startTime: '18:40',
                endTime: '19:00'
            }
        ]
    },
    {
        id: 4,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '19:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Julian',
                startTime: '19:00',
                endTime: '19:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Evey',
                startTime: '19:00',
                endTime: '19:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Peter',
                startTime: '19:00',
                endTime: '19:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Victor',
                startTime: '19:20',
                endTime: '19:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Julian',
                startTime: '19:20',
                endTime: '19:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Evey',
                startTime: '19:20',
                endTime: '19:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Peter',
                startTime: '19:40',
                endTime: '20:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Victor',
                startTime: '19:40',
                endTime: '20:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Julian',
                startTime: '19:40',
                endTime: '20:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Victor',
                startTime: '19:00',
                endTime: '19:20'
            },
            {
                name: 'Peter',
                startTime: '19:20',
                endTime: '19:40'
            },
            {
                name: 'Evey',
                startTime: '19:40',
                endTime: '20:00'
            }
        ]
    },
    {
        id: 5,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '20:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Evey',
                startTime: '20:00',
                endTime: '20:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Peter',
                startTime: '20:00',
                endTime: '20:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Victor',
                startTime: '20:00',
                endTime: '20:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Julian',
                startTime: '20:20',
                endTime: '20:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Evey',
                startTime: '20:20',
                endTime: '20:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Peter',
                startTime: '20:20',
                endTime: '20:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Victor',
                startTime: '20:40',
                endTime: '21:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Julian',
                startTime: '20:40',
                endTime: '21:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Evey',
                startTime: '20:40',
                endTime: '21:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Julian',
                startTime: '20:00',
                endTime: '20:20'
            },
            {
                name: 'Victor',
                startTime: '20:20',
                endTime: '20:40'
            },
            {
                name: 'Peter',
                startTime: '20:40',
                endTime: '21:00'
            }
        ]
    },
    {
        id: 6,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '21:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Peter',
                startTime: '21:00',
                endTime: '21:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Victor',
                startTime: '21:00',
                endTime: '21:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Julian',
                startTime: '21:00',
                endTime: '21:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Evey',
                startTime: '21:20',
                endTime: '21:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Peter',
                startTime: '21:20',
                endTime: '21:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Victor',
                startTime: '21:20',
                endTime: '21:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Julian',
                startTime: '21:40',
                endTime: '22:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Evey',
                startTime: '21:40',
                endTime: '22:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Peter',
                startTime: '21:40',
                endTime: '22:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Evey',
                startTime: '21:00',
                endTime: '21:20'
            },
            {
                name: 'Julian',
                startTime: '21:20',
                endTime: '21:40'
            },
            {
                name: 'Victor',
                startTime: '21:40',
                endTime: '22:00'
            }
        ]
    },
    {
        id: 7,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '22:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Victor',
                startTime: '22:00',
                endTime: '22:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Julian',
                startTime: '22:00',
                endTime: '22:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Evey',
                startTime: '22:00',
                endTime: '22:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Peter',
                startTime: '22:20',
                endTime: '22:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Victor',
                startTime: '22:20',
                endTime: '22:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Julian',
                startTime: '22:20',
                endTime: '22:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Evey',
                startTime: '22:40',
                endTime: '23:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Peter',
                startTime: '22:40',
                endTime: '23:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Victor',
                startTime: '22:40',
                endTime: '23:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Peter',
                startTime: '22:00',
                endTime: '22:20'
            },
            {
                name: 'Evey',
                startTime: '22:20',
                endTime: '22:40'
            },
            {
                name: 'Julian',
                startTime: '22:40',
                endTime: '23:00'
            }
        ]
    },
    {
        id: 8,
        shift: 'afternoon',
        shiftStartTime: '16:00',
        shiftEndTime: '00:00',
        currentHour: '23:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Julian',
                startTime: '23:00',
                endTime: '23:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Evey',
                startTime: '23:00',
                endTime: '23:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Peter',
                startTime: '23:00',
                endTime: '23:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Victor',
                startTime: '23:20',
                endTime: '23:40'
            },
            {
                id: 4,
                tableNumber: 2,
                name: 'Julian',
                startTime: '23:20',
                endTime: '23:40'
            },
            {
                id: 5,
                tableNumber: 3,
                name: 'Evey',
                startTime: '23:20',
                endTime: '23:40'
            },
            {
                id: 6,
                tableNumber: 1,
                name: 'Peter',
                startTime: '23:40',
                endTime: '00:00'
            },
            {
                id: 7,
                tableNumber: 2,
                name: 'Victor',
                startTime: '23:40',
                endTime: '00:00'
            },
            {
                id: 8,
                tableNumber: 3,
                name: 'Julian',
                startTime: '23:40',
                endTime: '00:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Victor',
                startTime: '23:00',
                endTime: '23:20'
            },
            {
                name: 'Peter',
                startTime: '23:20',
                endTime: '23:40'
            },
            {
                name: 'Evey',
                startTime: '23:40',
                endTime: '00:00'
            }
        ]
    },
]
export const scheduleArrayNight: GamePresenter[] = [
    {
        id: 1,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '00:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Evey',
                startTime: '00:00',
                endTime: '00:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Peter',
                startTime: '00:00',
                endTime: '00:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Victor',
                startTime: '00:00',
                endTime: '00:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Julian',
                startTime: '00:20',
                endTime: '00:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Evey',
                startTime: '00:20',
                endTime: '00:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Peter',
                startTime: '00:20',
                endTime: '00:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Victor',
                startTime: '00:40',
                endTime: '01:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Julian',
                startTime: '00:40',
                endTime: '01:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Evey',
                startTime: '00:40',
                endTime: '01:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Julian',
                startTime: '00:00',
                endTime: '00:20'
            },
            {
                name: 'Victor',
                startTime: '00:20',
                endTime: '00:40'
            },
            {
                name: 'Peter',
                startTime: '00:40',
                endTime: '01:00'
            }
        ]
    },
    {
        id: 2,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '01:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Peter',
                startTime: '01:00',
                endTime: '01:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Victor',
                startTime: '01:00',
                endTime: '01:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Julian',
                startTime: '01:00',
                endTime: '01:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Evey',
                startTime: '01:20',
                endTime: '01:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Peter',
                startTime: '01:20',
                endTime: '01:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Victor',
                startTime: '01:20',
                endTime: '01:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Julian',
                startTime: '01:40',
                endTime: '02:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Evey',
                startTime: '01:40',
                endTime: '02:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Peter',
                startTime: '01:40',
                endTime: '02:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Evey',
                startTime: '01:00',
                endTime: '01:20'
            },
            {
                name: 'Julian',
                startTime: '01:20',
                endTime: '01:40'
            },
            {
                name: 'Victor',
                startTime: '01:40',
                endTime: '02:00'
            }
        ]
    },
    {
        id: 3,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '02:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Julian',
                startTime: '02:00',
                endTime: '02:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Evey',
                startTime: '02:00',
                endTime: '02:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Peter',
                startTime: '02:00',
                endTime: '02:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Victor',
                startTime: '02:20',
                endTime: '02:40'
            },
            {
                id: 4,
                tableNumber: 2,
                name: 'Julian',
                startTime: '02:20',
                endTime: '02:40'
            },
            {
                id: 5,
                tableNumber: 3,
                name: 'Evey',
                startTime: '02:20',
                endTime: '02:40'
            },
            {
                id: 6,
                tableNumber: 1,
                name: 'Peter',
                startTime: '02:40',
                endTime: '03:00'
            },
            {
                id: 7,
                tableNumber: 2,
                name: 'Victor',
                startTime: '02:40',
                endTime: '03:00'
            },
            {
                id: 8,
                tableNumber: 3,
                name: 'Julian',
                startTime: '02:40',
                endTime: '03:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Victor',
                startTime: '02:00',
                endTime: '02:20'
            },
            {
                name: 'Peter',
                startTime: '02:20',
                endTime: '02:40'
            },
            {
                name: 'Evey',
                startTime: '02:40',
                endTime: '03:00'
            }
        ]
    },
    {
        id: 4,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '03:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Victor',
                startTime: '03:00',
                endTime: '03:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Julian',
                startTime: '03:00',
                endTime: '03:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Evey',
                startTime: '03:00',
                endTime: '03:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Peter',
                startTime: '03:20',
                endTime: '03:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Victor',
                startTime: '03:20',
                endTime: '03:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Julian',
                startTime: '03:20',
                endTime: '03:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Evey',
                startTime: '03:40',
                endTime: '04:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Peter',
                startTime: '03:40',
                endTime: '04:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Victor',
                startTime: '03:40',
                endTime: '04:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Peter',
                startTime: '03:00',
                endTime: '03:20'
            },
            {
                name: 'Evey',
                startTime: '03:20',
                endTime: '03:40'
            },
            {
                name: 'Julian',
                startTime: '03:40',
                endTime: '04:00'
            }
        ]
    },
    {
        id: 5,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '04:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Julian',
                startTime: '04:00',
                endTime: '04:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Evey',
                startTime: '04:00',
                endTime: '04:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Peter',
                startTime: '04:00',
                endTime: '04:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Victor',
                startTime: '04:20',
                endTime: '04:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Julian',
                startTime: '04:20',
                endTime: '04:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Evey',
                startTime: '04:20',
                endTime: '04:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Peter',
                startTime: '04:40',
                endTime: '05:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Victor',
                startTime: '04:40',
                endTime: '05:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Julian',
                startTime: '04:40',
                endTime: '05:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Victor',
                startTime: '04:00',
                endTime: '04:20'
            },
            {
                name: 'Peter',
                startTime: '04:20',
                endTime: '04:40'
            },
            {
                name: 'Evey',
                startTime: '04:40',
                endTime: '05:00'
            }
        ]
    },
    {
        id: 6,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '05:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Evey',
                startTime: '05:00',
                endTime: '05:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Peter',
                startTime: '05:00',
                endTime: '05:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Victor',
                startTime: '05:00',
                endTime: '05:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Julian',
                startTime: '05:20',
                endTime: '05:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Evey',
                startTime: '05:20',
                endTime: '05:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Peter',
                startTime: '05:20',
                endTime: '05:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Victor',
                startTime: '05:40',
                endTime: '06:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Julian',
                startTime: '05:40',
                endTime: '06:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Evey',
                startTime: '05:40',
                endTime: '06:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Julian',
                startTime: '05:00',
                endTime: '05:20'
            },
            {
                name: 'Victor',
                startTime: '05:20',
                endTime: '05:40'
            },
            {
                name: 'Peter',
                startTime: '05:40',
                endTime: '06:00'
            }
        ]
    },
    {
        id: 7,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '06:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Peter',
                startTime: '06:00',
                endTime: '06:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Victor',
                startTime: '06:00',
                endTime: '06:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Julian',
                startTime: '06:00',
                endTime: '06:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Evey',
                startTime: '06:20',
                endTime: '06:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Peter',
                startTime: '06:20',
                endTime: '06:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Victor',
                startTime: '06:20',
                endTime: '06:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Julian',
                startTime: '06:40',
                endTime: '07:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Evey',
                startTime: '06:40',
                endTime: '07:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Peter',
                startTime: '06:40',
                endTime: '07:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Evey',
                startTime: '06:00',
                endTime: '06:20'
            },
            {
                name: 'Julian',
                startTime: '06:20',
                endTime: '06:40'
            },
            {
                name: 'Victor',
                startTime: '06:40',
                endTime: '07:00'
            }
        ]
    },
    {
        id: 8,
        shift: 'night',
        shiftStartTime: '00:00',
        shiftEndTime: '08:00',
        currentHour: '07:00',
        assignedTables: [
            {
                id: 1,
                tableNumber: 1,
                name: 'Victor',
                startTime: '07:00',
                endTime: '07:20'
            },
            {
                id: 2,
                tableNumber: 2,
                name: 'Julian',
                startTime: '07:00',
                endTime: '07:20'
            },
            {
                id: 3,
                tableNumber: 3,
                name: 'Evey',
                startTime: '07:00',
                endTime: '07:20'
            },
            {
                id: 4,
                tableNumber: 1,
                name: 'Peter',
                startTime: '07:20',
                endTime: '07:40'
            },
            {
                id: 5,
                tableNumber: 2,
                name: 'Victor',
                startTime: '07:20',
                endTime: '07:40'
            },
            {
                id: 6,
                tableNumber: 3,
                name: 'Julian',
                startTime: '07:20',
                endTime: '07:40'
            },
            {
                id: 7,
                tableNumber: 1,
                name: 'Evey',
                startTime: '07:40',
                endTime: '08:00'
            },
            {
                id: 8,
                tableNumber: 2,
                name: 'Peter',
                startTime: '07:40',
                endTime: '08:00'
            },
            {
                id: 9,
                tableNumber: 3,
                name: 'Victor',
                startTime: '07:40',
                endTime: '08:00'
            },
        ],
        assignedBreakSlots: [
            {
                name: 'Peter',
                startTime: '07:00',
                endTime: '07:20'
            },
            {
                name: 'Evey',
                startTime: '07:20',
                endTime: '07:40'
            },
            {
                name: 'Julian',
                startTime: '07:40',
                endTime: '08:00'
            }
        ]
    },
]