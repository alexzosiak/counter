

export const initUserId = async () => {
    const userID = localStorage.getItem('userId');

    if (!userID) {
        const res = await fetch('http://localhost:3000/init', {
            method: 'POST',
        });

        const data = await res.json();

        localStorage.setItem('userId', data.id);
       
        return data.id;
    }

    return { userID }  ;
};
