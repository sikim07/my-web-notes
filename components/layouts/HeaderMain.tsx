import Link from 'next/link'
import DarkModeSwitch from '../buttons/DarkModeSwitch'

const NAVIGATE_MENU = [
    { id: 0, title: '1', url: '/' },
    {
        id: 1,
        title: '2',
        url: '/dialog',
    },
    {
        id: 2,
        title: '3',
        url: '/',
    },
]

const HeaderMain = (): JSX.Element => {
    return (
        <header className="flex h-[80px] items-center justify-between px-[20px]">
            <div className="">로고</div>
            <nav className="flex gap-[10px]">
                {NAVIGATE_MENU.map((menu) => (
                    <div key={menu.id}>
                        <Link href={menu.url}>{menu.title}</Link>
                    </div>
                ))}
            </nav>
            <DarkModeSwitch />
        </header>
    )
}

export default HeaderMain
