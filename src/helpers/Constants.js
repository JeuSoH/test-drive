export const AUTH_API = "http://35.223.58.241:5000";
export const DB_JSON = "http://localhost:8000/users/";

export function countPrice(array) {
    return array.reduce((sum, elem) => {
        return sum + parseInt(elem.subPrice)
    }, 0)
}
