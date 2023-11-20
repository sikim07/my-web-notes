import { useEffect, useMemo, useState } from 'react'

const HomeMain = (): JSX.Element => {
    const words = '12345'
    const maxCount = words.length - 1

    const [count, setCount] = useState(0)
    const [writtenWords, setWrittenWords] = useState('')
    const [proceedingWord, setProceedingWord] = useState('')
    const [scheduledWord, setScheduledWord] = useState(words)

    useMemo(() => {
        setProceedingWord(words.at(count) ?? '')
        setWrittenWords((current) => current + proceedingWord)
        setScheduledWord(words.substring(count + 1))
    }, [count])

    useMemo(() => {
        const textingInterval = setInterval(() => {
            setCount((current) => (current += 1))
        }, 1000)

        if (count > maxCount) console.log('end')
        return () => {
            clearInterval(textingInterval)
        }
    }, [])

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
