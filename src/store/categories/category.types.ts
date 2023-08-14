export enum categoryActionTypes {
    FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED'
}

export type CategoryItem = {
    id: number,
    name: string,
    price: number
}

export type Category = {
    title: string;
    items: CategoryItem[]
}

export type CategoryMap = {
    [key: string]: CategoryItem[]
}