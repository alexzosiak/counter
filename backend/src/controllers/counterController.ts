import * as counterService from '../services/counterService';

export const getCounter = (req, res) => {
    const user = counterService.getUser(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });

    res.json(user);
};

export const updateCounter = (req, res) => {
    try {
        const updatedUser = counterService.updateCounter(req.params.id, req.body.value);
        res.json(updatedUser);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export const initCounter = (req, res) => {
    const newUser = counterService.initUser();
    res.json(newUser);
};

export const getSave = (req, res) => {
    const user = counterService.getUser(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });

    res.json(user);
};

export const addSave = (req, res) => {
    try {
        const updatedUser = counterService.addSave(req.params.id, req.body.value);
        res.json(updatedUser);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

export const deleteSave = (req, res) => {
    try {
        counterService.deleteSave(req.body.idUser, req.body.idSave);
        res.json({ message: 'item deleted' });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};