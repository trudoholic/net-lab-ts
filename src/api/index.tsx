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

export const getUnits = async (signal: AbortSignal): Promise<IUnit[]> => {
    const { data } = await client.get<IData>('', {signal})
    return data.products
}

export const createUnit = async (unit: IUnit): Promise<IUnit> => {
    const { data } = await client.post('', { ...unit })
    return data
}

export function logError (error: unknown) {
    const err = error as AxiosError

    // if (axios.isCancel(err)) {
    //     console.log('Request canceled', err.message);
    // } else {
    //     console.log((err as AxiosError).message)
    // }

    console.log(err.name, err.message)
    return err.message
}