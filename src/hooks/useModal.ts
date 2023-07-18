import { useState, useCallback } from 'react'

export const useModal = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const triggerModal = useCallback(() => {
        setShowModal((showModal) => !showModal)
    }, [])

    return {
        showModal,
        triggerModal
    }
}