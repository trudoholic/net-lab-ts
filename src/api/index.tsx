import axios, {AxiosError} from 'axios'

const testId = 1

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
    const { data } = await client.get<IUnit[]>(`posts?userId=${testId}`)
    return data
}

export const createUnit = async (userId: number, title: string, body: string): Promise<IUnit> => {
    const { data } = await client.post('posts', { userId, title, body })
    return data
}

function randomString(length: number) {
    const characters = ' abcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    let result = ''
    let counter = length
    while (counter --> 0) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

export const createRandomUnit = async (): Promise<IUnit> => {
    const { data } = await client.post('posts', {
        userId: testId,
        title: randomString(10),
        body: randomString(100),
    })
    return data
}

export function logError (error: unknown) {
    const err = error as AxiosError
    console.log(err.message)
    return err.message
}