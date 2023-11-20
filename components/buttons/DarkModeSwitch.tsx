import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import classNames from 'classnames'

const DarkModeSwitch = (): JSX.Element => {
    const router = useRouter()
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (router.isReady) return window.localStorage.theme === 'dark' ?? false
    })

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
        if (!router.isReady) return
        if (window.localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <div className="cursor-pointer" onClick={switchDarkMode}>
            <div className="h-[25px] w-[40px] rounded-[20px] border border-solid border-[#333] p-[2px] dark:border-[#fff]">
                <div
                    className={classNames(
                        'relative h-[20px] w-[20px] rounded-[10px] bg-black dark:bg-white',
                        isDarkMode ? 'animate-actSlideRight' : 'animate-actSlideLeftBack'
                    )}></div>
            </div>
        </div>
    )
}

export default DarkModeSwitch
