import { create } from 'zustand';

const useCounter = create((set) => ({
    count: 0,
    plusCount: () => set((state) => ({ count: state.count + 1 })),
    minusCount: () => set((state) => (state.count > 0 ? { count: state.count - 1 } : state)),
    randomCounter: () => set((state) => ({ count: Math.floor(Math.random() * (0 - 100) + 100)})),
    reset: () => set({ count: 0 }),
}));

export default useCounter;
