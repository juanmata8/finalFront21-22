export type characters = {
        characters:{
            results:Character[]
        }
    }

export type Character = {
    id?: string,
    name?:string,
    status?:string,
    species?:string,
    type?:string,
    gender?:string,
    origin?:string,
    location?:string,
    image?:string,
    episode?:Episode[];
    created?:string
}

export type character = {
    character:Character  
}

type Episode = {
    id: string,
    name:string,
    air_date:string,
    episode:string,
    characters:Character[],
    created:string
}