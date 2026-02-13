import { create } from 'zustand';
import { getCounter, setCounter } from '../../Api';

const useCounter = create((set, get) => ({
    count: 0,
    fetchCounter: async () => {
        const data = await getCounter();
        set({ count: data.value });
    },

    plusCount: async () => {
        const newValue = get().count + 1; 
        set({ count: newValue });        
        await setCounter(newValue);
    },  

    minusCount: async () => {
        const state = get();
        const newValue = state.count > 0 ? state.count - 1 : state.count;
        set({ count: newValue });
        await setCounter(newValue);
    },

    randomCounter: async () => {
        const state = get();
        const newValue = state.count = Math.floor(Math.random() * (0 - 100) + 100);
        set({ count: newValue });
        await setCounter(newValue);
    },

    reset: async () => {
        const state = get();
        const newValue = state.count = 0;
        set({ count: newValue });
        await setCounter(newValue);
    },
}));

export default useCounter;






// const useCounter = create((set) => ({
//     count: 0,
//     plusCount: () => set((state) => ({ count: state.count + 1 })),
//     minusCount: () => set((state) => (state.count > 0 ? { count: state.count - 1 } : state)),
//     randomCounter: () => set((state) => ({ count: Math.floor(Math.random() * (0 - 100) + 100)})),
//     reset: () => set({ count: 0 }),
// }));