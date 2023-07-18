import  { ReactNode, ComponentType } from 'react'
import {
    Container,
    Content
} from './Dashboard.styled'
import { Sidebar } from './sidebar'

type LayoutPropType = {
    children?: ReactNode
}

const DashboardLayout = ({ children }: LayoutPropType) => {
    return (
        <>
            <Container>
                <Sidebar />
                <Content>
                    {children}
                </Content>
            </Container>
        </>
    )
}

export const withDashboard = <P extends object>(Component: ComponentType<P>)=> {
    return (props: P) => {
        return (
            <DashboardLayout>
                <Component {...props} />
            </DashboardLayout>
        )
    }
}