export const CHANGE_PAGE = 'CHANGE_PAGE';

export interface ChangePageAction {
    type: typeof CHANGE_PAGE
    page: string
}

export type Action = ChangePageAction;

export interface BendsPack {
    id: string
    name: string
    likes: number
    createdOn: Date
}

export type Dict<T> = {[key: string]: T};

export interface RootState {
    page: string
}