import React from 'react';
import ReactDOM from 'react-dom';
import './StarWars.css'


function Character(props) {
    
    return (
        <div data-aos="zoom-in" className="character-card">
        
            <div className="character-info">
                <h3 className="char-name">{props.swProp.name}</h3>
                <p>
                    <strong>Birth Year:</strong> {props.swProp.birth_year}
                </p>
                <p>
                    <strong>Eye Color:</strong> {props.swProp.eye_color}
                </p>
                <p>
                    <strong>Films:</strong> {props.swProp.films}
                </p>
                <p>
                    <strong>Gender:</strong> {props.swProp.gender}
                </p>
                <p>
                    <strong>Hair Color:</strong> {props.swProp.hair_color}
                </p>
                <p>
                    <strong>Height:</strong> {props.swProp.height}
                </p>
                <p>
                    <strong>Home World:</strong> {props.swProp.homeworld}
                </p>
                <p>
                    <strong>Mass:</strong> {props.swProp.mass}
                </p>
                {/* <p>
                   <strong>Name:</strong> {props.swProp.name}
                </p> */}
                <p>
                   <strong>Skin Color:</strong> {props.swProp.skin_color}
                </p>
                <p>
                    <strong>Species:</strong> {props.swProp.species}
                </p>
                <p>
                    <strong>Starships:</strong> {props.swProp.starships}
                </p>
                <p>
                    <strong>URL:</strong> {props.swProp.url}
                </p>
                <p>
                    <strong>Vehicles:</strong> {props.swProp.vehicles}
                </p>
            </div>
        </div>
    )
}

export default Character;