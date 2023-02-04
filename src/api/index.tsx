import axios from 'axios'

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
    const { data } = await client.get<IUnit[]>('posts?_limit=10')
    return data
    // const { data } = await client.get<IUnit[]>(`posts/${42}`)
    // return data
}
