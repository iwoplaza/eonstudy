export interface Theorem {
    key: number,
    name?: string,
    author?: string,
    category: string[],
    prereqs: string[],
    symbolic?: string,
    thesis: string[],
    important?: boolean,
}