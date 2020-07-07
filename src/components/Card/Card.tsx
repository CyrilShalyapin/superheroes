import React, { useEffect, useState, ReactElement } from 'react';
import { ICardProps } from './Card.model';
import { IHero } from '../../models';
import './Card.less';

export default function Card(props: ICardProps): ReactElement {
    const [ hero, setHero ] = useState<IHero>();

    useEffect((): void => {
        const storedHero: IHero | null = JSON.parse(window.localStorage.getItem(props.heroConfig.name));
        if (storedHero) {
            setHero(storedHero);
        } else {
            fetch(`/api/heroes/${props.heroConfig.id}`)
                .then((res: Response) => res.json())
                .then((hero: IHero) => {
                    window.localStorage.setItem(props.heroConfig.name, JSON.stringify(hero));
                    setHero(hero);
                });
        }

    }, [props.heroConfig]);

    return hero ? (
        <div className="card">
            <h2 className="card-header">{hero.name || props.heroConfig.name}</h2>
            <div className="card-main">
                <img className="card-main-avatar" src={hero.image.url} alt="avatar"/>
                <div className="card-main-stats">
                    <h3 className="card-main-stats-header">Stats</h3>
                    <ul className="card-main-stats-info">
                        <li>Intelligence: {hero.powerstats.intelligence}</li>
                        <li>Strength: {hero.powerstats.strength}</li>
                        <li>Speed: {hero.powerstats.speed}</li>
                        <li>Durability: {hero.powerstats.durability}</li>
                        <li>Power: {hero.powerstats.power}</li>
                        <li>Combat: {hero.powerstats.combat}</li>
                    </ul>
                </div>
            </div>
            <h3>Biography</h3>
            <ul className="card-bio">
                <li>Full Name: {hero.biography['full-name']}</li>
                <li>Alter-egos: {hero.biography['alter-egos']}</li>
                <li>Aliases: {hero.biography.aliases.join(', ')}</li>
                <li>Place of Birth: {hero.biography['place-of-birth']}</li>
                <li>First Appearance    : {hero.biography['first-appearance']}</li>
                <li>Publisher: {hero.biography.publisher}</li>
                <li>Alignment: {hero.biography.alignment}</li>
            </ul>
        </div>
    ) : null
}
