import DarkModeSwitch from '../buttons/DarkModeSwitch'

const HeaderMain = (): JSX.Element => {
    return (
        <header className="flex h-[80px] items-center justify-between px-[20px]">
            <div className="">로고</div>
            <nav className="">1 | 2 | 3</nav>
            <DarkModeSwitch />
        </header>
    )
}

export default HeaderMain
