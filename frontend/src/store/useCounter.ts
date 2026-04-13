import { create } from 'zustand';
import { getCounter, setCounter, setSave, getSave, deleteSaveItem} from '../api/Api';

const useCounter = create((set, get) => ({
    count: 0,
    id: '',
    save: [],
    loading: true,

    initUserIdState: async (res: string) => {
        const newValue = res;
        console.log(`inituserIdState id = ${newValue}`);
        set({id: newValue});
    },

    initSaveCount: async (res: string) => {
        const id = res;
        if(!id) {
            return
        }

        console.log(`init save = ${id}`)
        const data = await getSave(id);
        set({save: data})
    },

    initCount: async (res: string) => {
        const id = res;
        if (!id) {
            return
        }
        console.log(`init Counter id = ${id}`)

        const data = await getCounter(id);
        console.log('data', data)
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

    randomCount: async () => {
        const state = get();
        const newValue = Math.floor(Math.random() * (0 - 100) + 100);
        set({ count: newValue });
        await setCounter(state.id, newValue);
    },

    resetCount: async () => {
        const state = get();
        const newValue = 0;
        set({ count: newValue });
        await setCounter(state.id, newValue);
    },

    getHistory: async () => {
        const { id } = get();
        const data = await getSave(id);
        set({ save: data })
    },

    onSaveCount: async () => {
        const {id, count} = get();
        const newValue = 0;
        set({count: newValue});
        await setCounter(id, newValue);
        await setSave(id, count);
        const data = await getSave(id);
        console.log(data);
        set({ save: data })
    },

    onDeleteCount: async (res: string) => {
        const state = get();
        await deleteSaveItem(state.id, res);
        console.log(state.id)
        const data = await getSave(state.id);
        set({ save: data });
    },

}));

export default useCounter;