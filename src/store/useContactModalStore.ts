import { create } from 'zustand'

interface ContactModalState {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const useContactModalStore = create<ContactModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}))

export default useContactModalStore
