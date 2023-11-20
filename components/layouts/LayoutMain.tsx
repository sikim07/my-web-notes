import HeaderMain from '@/components/layouts/HeaderMain'
import FooterMain from '@/components/layouts/FooterMain'
import { ReactNode } from 'react'

const LayoutMain = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <div>
            <HeaderMain />
            <main>{children}</main>
            <FooterMain />
        </div>
    )
}

export default LayoutMain
