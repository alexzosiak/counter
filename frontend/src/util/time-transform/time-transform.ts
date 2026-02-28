
const timeTransform = (elementTime: string) => {
    const time =  new Date(elementTime);
    console.log(time);
    const year = String(time.getFullYear()).padStart(2, '0');
    const day = String(time.getDate()).padStart(2, '0');
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return {year, month, day, hours, minutes, seconds}
}

export default timeTransform;