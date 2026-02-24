import { create } from 'zustand';
import { getCounter, setCounter, setSave, getSave } from '../../Api';


const useCounter = create((set, get) => ({
    count: 0,
    id: '',
    save: [],

    initUserIdState: (res) => {
        const newValue = res.userID;
        console.log(newValue);
        set({id: newValue});
    },

    fetchSave: async (res) => {
        const id = res.userID;
        if(!id) {
            return
        }
        const data = await getSave(id);
        set({save: data.save})
    },

    fetchCounter: async (res) => {
        const id = res.userID;
        if (!id) {
            return
        }

        const data = await getCounter(id);
        set({ count: data.count });
    },

    plusCount: async () => {
        const state = get();
        const newValue = state.count + 1; 
        set({ count: newValue });        
        await setCounter(state.id, newValue);
    },  

    minusCount: async () => {
        const state = get();
        const newValue = state.count > 0 ? state.count - 1 : state.count;
        set({ count: newValue });
        await setCounter(state.id, newValue);
    },

    randomCounter: async () => {
        const state = get();
        const newValue = Math.floor(Math.random() * (0 - 100) + 100);
        set({ count: newValue });
        await setCounter(state.id, newValue);
    },

    reset: async () => {
        const state = get();
        const newValue = 0;
        set({ count: newValue });
        await setCounter(state.id, newValue);
    },

    onSave: async () => {
        const {id, count} = get();
        const newValue = 0;
        set({count: newValue});
        await setCounter(id, newValue);
        await setSave(id, count);
    }
}));

export default useCounter;






// const useCounter = create((set) => ({
//     count: 0,
//     plusCount: () => set((state) => ({ count: state.count + 1 })),
//     minusCount: () => set((state) => (state.count > 0 ? { count: state.count - 1 } : state)),
//     randomCounter: () => set((state) => ({ count: Math.floor(Math.random() * (0 - 100) + 100)})),
//     reset: () => set({ count: 0 }),
// }));