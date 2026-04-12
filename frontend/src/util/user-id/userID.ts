
type InitUserResponse = {
    userID: string | null;
};

export const initUserId = async (): Promise<InitUserResponse> => {

    const userID = localStorage.getItem('userId');
    console.log(`line 4 ${userID}`);

    if (!userID) {
        const res = await fetch('http://localhost:3000/init', {
            method: 'POST',
        });

        const data = await res.json();
        console.log(`line 4/2 ${data}`);
        localStorage.setItem('userId', data.id);
        return { userID: data.id };
    }  

    return { userID };
};
