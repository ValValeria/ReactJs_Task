import { DataMain } from "../interfaces";

const obj:Readonly<DataMain>={
    films:{
        main:["title","episode_id"],
        notMain:["title","episode_id","opening_crawl",
        ,"producer","director","release_date","planets"
        ,"starships"
        ]
    },
    planets:{
        main:["name","population"],
        notMain:["name","population","rotation_period",
        "diameter",`climate`,`gravity`,'terrain',
        'surface_water','population',
        'films','created'
    ]
    },
    starships:{
        main:["name","manufacturer"],
        notMain:["name",
        "model",
        "manufacturer",
        "cost_in_credits",
        "length",
        "max_atmosphering_speed",
        "crew",
        "passengers",
        "cargo_capacity",
        "consumables",
        "hyperdrive_rating",
        "MGLT",
        "starship_class",
        "films"]
    }
}
export  {obj as whatToShow}