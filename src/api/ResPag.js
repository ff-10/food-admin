import rests from "../mocks/restaurants/restaurnat.json";

export const resPaginationApi = {
    getData: ({from, to}) => {
        return new Promise((resolve, reject) => {
            const data = rests.slice(from, to);
            
            resolve({
                count: rests.length,
                data
            })
        })
    }
};