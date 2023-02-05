import axios, {AxiosError} from 'axios'

export const client = axios.create({
    baseURL: "https://dummyjson.com/products/"
})

export interface IUnit {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export interface IData {
    limit: number
    products: IUnit[]
    skip: number
    total: number
}

export const getUnits = async (): Promise<IUnit[]> => {
    const { data } = await client.get<IData>('')
    return data.products
}

export const createUnit = async (unit: IUnit): Promise<IUnit> => {
    const { data } = await client.post('', { ...unit })
    return data
}

export function logError (error: unknown) {
    const err = error as AxiosError
    console.log(err.message)
    return err.message
}