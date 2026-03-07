import { create } from 'zustand';

const useView = create((set, get) => ({
    showHistory: false,

    toggleHistory: async () => {
        const state = await get();
        if (!state.showHistory) {
            set({ showHistory: true });
        } else {
            set({ showHistory: false });
        }
    }
}));

export default useView;