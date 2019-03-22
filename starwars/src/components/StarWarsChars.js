import React from 'react';
import ReactDOM from 'react-dom';
import './StarWars.css'

import Character from "./Character";

const swC = [
    {
        birth_year: "19BBY",
        created: Date.now(),
        eye_color: "Blue",
        films: "Star Wars II",
        gender: "Male",
        hair_color: "Blond",
        height: "172",
        homeworld: "https://swapi.com/api/planets/1/",
        mass: '77',
        name: "Luke Skywalker",
        skin_color: "Fair",
        species: "Human",
        starships: "X-Wing",
        url: "https://swapi.co/api/people/1/",
        vehicles: "Cruiser"
    },
    {
        birth_year: "1961",
        created: Date.now(),
        eye_color: "Brown",
        films: ["Ace Ventura: Pet Detective", ", ", "Ace Ventura: When Nature Calls"],
        gender: "Male",
        hair_color: "Brown",
        height: "167",
        homeworld: "Earth",
        mass: '69',
        name: "Ace Ventura",
        skin_color: "Fair",
        species: "Human",
        starships: "None",
        url: "https://en.wikipedia.org/wiki/Ace_Ventura",
        vehicles: "1972 Chevrolet Monte Carlo"
    },
    {
        birth_year: "1967",
        created: Date.now(),
        eye_color: "Brown",
        films: "Back to the Future",
        gender: "Male",
        hair_color: "Brown",
        height: "145",
        homeworld: "Earth",
        mass: '55',
        name: "Marty McFly",
        skin_color: "Fair",
        species: "Human",
        starships: "None",
        url: "https://en.wikipedia.org/wiki/Marty_McFly",
        vehicles: "1985 Toyota SR5"
    },
    {
        birth_year: "Unknown",
        created: Date.now(),
        eye_color: "Black",
        films: "South Park: Bigger, Longer & Uncut",
        gender: "Male",
        hair_color: "Brown",
        height: "110",
        homeworld: "Earth",
        mass: '65',
        name: "Eric Cartman",
        skin_color: "Fair",
        species: "Human",
        starships: "None",
        url: "https://en.wikipedia.org/wiki/Marty_McFly",
        vehicles: "Handicapped Shopping Cart"
    }
];


class StarWarsChars extends React.Component {
    constructor() {
        super();
        this.state = {
            swcList: swC
        }
    }





    render() {
        return (
            <div className="swC-wrapper">

                <div className="card-list">
                    {this.state.swcList.map((dogBanana, index) => (
                        <Character key={index} swProp={dogBanana} />
                    ))}
                </div>
            </div>
        )
    }
}


export default StarWarsChars;