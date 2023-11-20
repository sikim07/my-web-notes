import { useMemo, useState } from 'react'

const DarkModeSwitch = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(window.localStorage.theme === 'dark')

    const switchDarkMode = () => {
        if (window.localStorage.theme === 'dark') {
            window.localStorage.removeItem('theme')
            setIsDarkMode(false)
        } else {
            window.localStorage.setItem('theme', 'dark')
            setIsDarkMode(true)
        }
    }

    useMemo(() => {
        if (window.localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <div>
            <div className="cursor-pointer" onClick={switchDarkMode}>
                <div className="h-[25px] w-[40px] rounded-[20px] border border-solid border-[#333] dark:border-[#fff]">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default DarkModeSwitch
