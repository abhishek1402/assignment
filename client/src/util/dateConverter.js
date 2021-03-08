export const dateFormatter = (date) => {
    let dateObj;
    let day;
    try {
        dateObj = new Date(date);
        day = dateObj.getDate();

        let month = dateObj.getMonth() + 1;
        let year = dateObj.getFullYear();
        return `${day}.${month}.${year}`;
    }
    catch (e) {
        return ""
    }
};
