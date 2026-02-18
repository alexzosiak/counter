
const way = 'http://localhost:3000';

export const getCounter = async (id: string) => {
    const res = await fetch(`${way}/counter/${id}`);
    return res.json();
};

export const setCounter = async (id: string, value: number) => {
    
    await fetch(`${way}/counter/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
    });
};

