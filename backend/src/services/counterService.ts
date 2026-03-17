import { readDB, writeDB } from '../ssd.ts';

export const getUser = (id: string) => {
    const db = readDB();
    const user = db[id];
    const filterUser = {
        ...user,
        save: [...user.save].sort((a, b) => b.timestamp - a.timestamp)
    }
    
    return filterUser;
};

export const updateCounter = (id: string, value: number) => {
    const db = readDB();
    const user = db[id];
    if (!user) throw new Error('User not found');

    user.count = value;
    writeDB(db);
    return user;
};

export const initUser = () => {
    const db = readDB();
    const id = Math.random().toString(36).substring(2, 10);
    db[id] = { count: 0, save: [] };
    writeDB(db);
    return { id, count: 0 };
};

export const addSave = (id: string, value: any) => {
    const db = readDB();
    const user = db[id];
    if (!user) throw new Error('User not found');

    const time = Date.now();
    const saveId = Math.random().toString(36).substring(2, 10);

    user.save.push({ id: saveId, value, timestamp: time });
    writeDB(db);
    return user;
};

export const deleteSave = (idUser: string, idSave: string) => {
    const db = readDB();
    const user = db[idUser];
    if (!user) throw new Error('User not found');

    user.save = user.save.filter(item => item.id !== idSave);
    writeDB(db);
};