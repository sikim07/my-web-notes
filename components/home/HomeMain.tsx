import { useEffect, useState } from 'react'

const HomeMain = (): JSX.Element => {
    const [test, setTest] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const results = await fetch('/api/list').then((response) => response.json())
            setTest(results)
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log('test', test)
    }, [test])

    return <div>Main Home</div>
}

export default HomeMain
