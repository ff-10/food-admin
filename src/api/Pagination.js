import products from "../mocks/products/product.json";



const PaginationApi = {
    getData: ({from, to}) => {
        return new Promise((resolve, reject) => {
            const data = products.slice(from, to);
            
            resolve({
                count: products.length,
                data
            })
        })
    }
}

export default PaginationApi;