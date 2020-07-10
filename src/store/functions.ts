import { Action } from "../interfaces";
import { DATA_REQUEST } from "./actions";

export function getData():Action{
    return {type:DATA_REQUEST}
}