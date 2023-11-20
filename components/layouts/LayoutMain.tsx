import HeaderMain from '@/components/layouts/HeaderMain'
import FooterMain from '@/components/layouts/FooterMain'
import { ReactNode } from 'react'

const LayoutMain = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <div className="bg-white text-black dark:bg-black dark:text-white">
            <HeaderMain />
            <main>{children}</main>
            <FooterMain />
        </div>
    )
}

export default LayoutMain
