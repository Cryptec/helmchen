
export function getDays() {
    let today = new Date().toISOString().slice(0, 10)

    const startDate = '2022-08-03';
    const endDate = today;

    const diffInMs = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);


    return diffInDays;
}