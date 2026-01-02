import qs from "query-string"

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

export async function fetcher<T>(
    endpoint: string,
    params?: QueryParams,
    revalidate =  60,
): Promise<T> {
    if(!BASE_URL) {
        throw new Error('COINGECKO_BASE_URL environment variable is not configured')
    } 
    if(!API_KEY) {
        throw new Error('COINGECKO_API_KEY environment variable is not configured')
    }
    const url = qs.stringifyUrl({
        url: `${BASE_URL}/${endpoint}`,
        query: params,
    }, { skipEmptyString: true, skipNull: true })

    const response = await fetch(url, {
        headers: {
            "x-cg-pro-api-key": API_KEY,
            "Content-type": "application/json"
        } as Record<string, string>,
        next: { revalidate }
    })

    if (!response.ok) {
        const errorBody: CoinGeckoErrorBody = await response.json().catch(() => ({}));

        throw new Error(`Api Error : ${response.status}  ${errorBody.error || response.statusText}`)
    }

    return response.json()
}