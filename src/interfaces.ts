import {DATA_REQUEST,DATA_LOADED} from './store/actions'
type actions_type=typeof DATA_REQUEST | typeof DATA_LOADED;

export interface Post{
    title:string,
    release_date:string,
    producer:string,
    planets?:string[],
    episode_id:number,
    opening_crawl:string,
    director?:string,
    characters?:Character[],
    url?:string,
    "starships"?:string[]
}
export interface Response_A{
    data:Post,
    status:number
}
export interface Character{
    height:number,
    mass:number,
    "hair_color": string,
	"skin_color": string,
	"eye_color": string,
    "birth_year": number,
    gender: 'male'|"female",
    homeworld:string,
    films: string[],
    starships:StartChips,
    url?:string
}
export interface StartChips{
    "name": string,
	"model": string,
	"manufacturer": string,
	"cost_in_credits": number,
	"length": number,
	"max_atmosphering_speed": number,
	"crew": number,
	"passengers": number,
	"cargo_capacity": number,
	"consumables": string,
	"MGLT": number,
	"starship_class": string,
    "pilots":string[],
    url?:string
}
export default interface Planets{
    "name": string,
	"rotation_period": number,
	"orbital_period": number,
	"diameter": number,
	"climate": string,
	"gravity":string,
	 terrain: number,
	 surface_water: number,
	 population: number,
     residents:string[],
     films:string[],
    "created":string,
    "hyperdrive_rating":number,
    url?:string

}

export interface Action{
    type: actions_type,
    loaded_data?:Post[]
}
export interface State{
    data:Post[]
}
export type t =keyof Required<Post> | keyof Required<StartChips> | keyof Required<Planets> | any;
export type or="films"| "planets"|"starships";
export type DataMain = {
    [props in or| "planets"|"starships"]: {
        main:t[],
        notMain:t[]
    };
};