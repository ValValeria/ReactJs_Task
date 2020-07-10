import { ajax, AjaxResponse } from 'rxjs/ajax';
import { retry ,map, take} from 'rxjs/internal/operators';


export function ajax_func(url:string,all?:boolean):any{
    if(!all) {
        url=`https://swapi.dev/api`.concat(url);
    } 
    return ajax(url).pipe(map(elem => {

        return { data: elem.response, status: elem.status ,url:url};
    }), take(1));
}