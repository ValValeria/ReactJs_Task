import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_REQUEST, DATA_LOADED } from "./actions";
import { Post } from "../interfaces";

export default function * watcher(){
    yield takeEvery(DATA_REQUEST,worker)
}
function* worker(){
  try{
      const posts=yield call (getData);
      yield put ({type:DATA_LOADED,loaded_data:posts})
  }catch (e){
      yield put ({type:DATA_LOADED,loaded_data:e})
  }
}

async function getData(url:string='https://swapi.dev/api/films/'){
    return fetch(url)
    .then(response =>
    response.json()
    ).then((json:{results:any[]})=>{
        return json.results.map((elem:Post):Post=>{
            return Object.assign({},{title:elem.title,release_date:elem.release_date,producer:elem.producer,opening_crawl:elem.opening_crawl,episode_id:elem.episode_id})
        }
     )
    });
}