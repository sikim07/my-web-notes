import LayoutMain from '@/components/layouts/LayoutMain'
import { useRef } from 'react'

const dialog = (): JSX.Element => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const openDialog = () => {
        if (dialogRef.current === null) return
        dialogRef.current.showModal()
    }

    const closeDialog = () => {
        if (dialogRef.current === null) return
        dialogRef.current.close()
    }

    return (
        <LayoutMain>
            <div>dialog</div>
            <div>
                <button onClick={openDialog}>open</button>
            </div>
            <dialog ref={dialogRef}>
                <div>adsfoihadsjlok</div>
                <button onClick={closeDialog}>close</button>
            </dialog>
        </LayoutMain>
    )
}

export default dialog
