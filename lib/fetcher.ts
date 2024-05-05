import wretch, { Wretch, WretchError } from "wretch";

const api = () => {
    return (
        wretch('https://api.openweathermap.org')
        .catcher(401, error => {
            console.error('Error:', error);
        })
    )
}

export const fetcher = (url: string): Promise<any> => {
    return api().get(url).json()
};