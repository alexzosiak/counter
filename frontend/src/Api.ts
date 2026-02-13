

const way = 'http://localhost:3000';

export const getCounter = async () => {
    const res = await fetch(`${way}/counter`);
    return res.json();
};

export const setCounter = async (value: number) => {
    await fetch(`${way}/counter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
    });
};
