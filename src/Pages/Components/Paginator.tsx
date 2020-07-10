import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import React from 'react'
import queryString from 'query-string';
import {click} from './Content';
import {useState} from 'react';

export default function (){
    const [message,updateMessage]=useState({message:``,date:Date.now()});

    (function say(){
       if(Date.now()-message.date> 6000) return updateMessage({message:`Что-то не так с API`,date:Date.now()});
       setTimeout(say,1000);
    })()
    
    return (
      <MemoryRouter initialEntries={['/movies']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query:any =  queryString.parse(location.search).page;
          const page = parseInt(query|| '1', 10);
          return (
            <Pagination
              page={page}
              count={3}
              onClick={(event)=>{
                let elem : HTMLAnchorElement = (event.target as HTMLElement).parentElement as HTMLAnchorElement;
                if(elem.getAttribute('aria-label')=="Go to next page"){
                      click.next('next');
                }else if(elem.getAttribute('aria-label')=="Go to previous page"){
                      click.next('prev');
             
                }
                }
              }
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/movies${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
    )
}