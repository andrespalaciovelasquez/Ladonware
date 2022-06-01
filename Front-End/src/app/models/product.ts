export interface Product {
    _id?: string,
    code: string,
    image: string,
    name: string,
    description: string,
    category: string,
    price: number,
    quantity: number,
    createdAt?: string,
    updatedAt?: string
}