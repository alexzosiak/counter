import * as counterService from '../services/counterService';

export const initCounter = async (req, res) => {
    try {
        const id = Math.random().toString(36).substring(2, 10);
        const count = 0;
        const newUser = await counterService.initUser(id, count);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



export const getCounter = async (req, res) => {
    try {
        const { id } = await req.params;
        const user = await counterService.getUser(id);
        if (!user) return res.status(404).json({ error: 'Not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCounter = async (req, res) => {
    try {  
        const { id } = await req.params;
        const { value } = await req.body;
        const updatedUser = await counterService.updateCounter(id, value);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



export const getSave = async (req, res) => {
    try {
        const user = await counterService.getUserSave(req.params.id);
        if (!user) return res.status(404).json({ error: 'Not found' });
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const addSave = async (req, res) => {
    try {
        const saveId = Math.random().toString(36).substring(2, 10);
        const time = Date.now();
        const { id } = req.params;
        const { value} = req.body;
        const updatedUser = await counterService.addSave(id, saveId, value, time);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// export const deleteSave = (req, res) => {
//     try {
//         counterService.deleteSave(req.body.idUser, req.body.idSave);
//         res.json({ message: 'item deleted' });
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// };