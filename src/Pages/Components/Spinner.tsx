import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner(){
    return (
        <div className=" posts__content__cards spinner__area">
            <div>
                <div>
                    <CircularProgress disableShrink/>
                </div>
            </div>
        </div>
    )
}