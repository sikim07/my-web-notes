import { useEffect, useMemo, useRef, useState } from 'react'

const HomeMain = (): JSX.Element => {
    const words = '12345'
    const maxCount = words.length - 1

    const [count, setCount] = useState(0)
    const [writtenWords, setWrittenWords] = useState('')
    const [proceedingWord, setProceedingWord] = useState('')
    const [scheduledWord, setScheduledWord] = useState(words)
    const countRef = useRef(0)

    useMemo(() => {
        const textingInterval: NodeJS.Timeout = setInterval(() => {
            countRef.current++
            setCount(countRef.current)
            if (countRef.current > maxCount) clearInterval(textingInterval)
        }, 1000)
    }, [])

    useMemo(() => {
        setProceedingWord(words.at(count) ?? '')
        setWrittenWords((current) => current + proceedingWord)
        setScheduledWord(words.substring(count + 1))
    }, [countRef.current])

    return (
        <div>
            <span className="text-[#333]">{writtenWords}</span>
            <span className="bg-black text-[#fff]">{proceedingWord}</span>
            <span className="text-[#333]">{count <= maxCount && '_'}</span>
            <span className="hidden">{scheduledWord}</span>
        </div>
    )
}

export default HomeMain
