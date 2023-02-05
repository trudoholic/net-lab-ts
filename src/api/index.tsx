import axios, {AxiosError} from 'axios'

export const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export interface IUnit {
    userId: number
    id: number
    title: string
    body: string
}

export const getUnits = async (): Promise<IUnit[]> => {
    const { data } = await client.get<IUnit[]>('posts?userId=1')
    return data
    // const { data } = await client.get<IUnit[]>(`posts/${42}`)
    // return data
}

export function logError (error: unknown) {
    const err = error as AxiosError
    console.log(err.message)
    return err.message
}