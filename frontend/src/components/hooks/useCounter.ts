import { create } from 'zustand';
import { getCounter, setCounter, setSave, getSave, deleteSaveItem} from '../../api/Api';

const useCounter = create((set, get) => ({
    count: 0,
    id: '',
    save: [],

    initUserIdState: (res) => {
        const newValue = res.userID;
        console.log(newValue);
        set({id: newValue});
    },

    initSave: async (res) => {
        const id = res.userID;
        if(!id) {
            return
        }
        const data = await getSave(id);
        set({save: data.save})
    },

    initCounter: async (res) => {
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
        const data = await getSave(id);
        set({ save: data.save})
    },

    onDelete: async (res) => {
        const state = get();

        await deleteSaveItem(state.id, res);
        const data = await getSave(state.id);
        set({ save: data.save });
    }
}));

export default useCounter;