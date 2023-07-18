import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions, MUIDataTableProps } from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material";

type TableProps = {
    columns?: MUIDataTableColumnDef[];
    data?: any[]
    title?: string
}

export const Table = ({
    columns = [],
    title,
    data = [],
}: TableProps) => {

    const theme = createTheme({
        components: {
            MUIDataTableBodyRow: {
                styleOverrides: {
                    root: {
                        cursor: 'pointer',
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        fontFamily: 'GT Walsheim Pro',
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: '16px',
                        fontFamily: 'GT Walsheim Pro',
                        textAlign: 'left'
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: '#185cff',
                    },
                },
            },
            MuiTableFooter: {
                styleOverrides: {
                    root: {
                        border: '1px solid #ffffff',
                    },
                },
            },
            // MUIDataTableFooter: {
            //     styleOverrides: {
            //         root: {
            //             display: 'none',
            //         },
            //     },
            // },
        },
    })
    const options: Partial<MUIDataTableOptions> = {
        responsive: 'standard',
        selectableRowsHideCheckboxes: true,
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <MUIDataTable columns={columns} title={title} data={data} options={options} />
            </ThemeProvider>
        </div>
    )
}