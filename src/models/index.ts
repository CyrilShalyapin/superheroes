export enum Heroes {
	Aquaman = 'Aquaman',
	Batgirl = 'Batgirl',
	Batman = 'Batman',
	BlackWidow = 'Black Widow',
	BoosterGold = 'Booster Gold',
	Catwoman = 'Catwoman',
	Cyborg = 'Cyborg',
	Deathstroke = 'Deathstroke',
	Doomsday = 'Doomsday',
	Enchantress = 'Enchantress',
	GorillaGrodd = 'Gorilla Grodd',
	GreenArrow = 'Green Arrow',
	HarleyQuinn = 'Harley Quinn',
	Ironman = 'Ironman',
	Joker = 'Joker',
	KillerCroc = 'Killer Croc',
	Krypto = 'Krypto',
	Nightwing = 'Nightwing',
	Penguin = 'Penguin',
	Spiderman = 'Spider-man',
	Superman = 'Superman',
	Vixen = 'Vixen',
	WonderGirl = 'Wonder Girl',
	WonderWoman = 'Wonder Woman',
	Zatanna = 'Zatanna',
}

export interface IHero {
    id: string;
    name: string;
    powerstats: {
        intelligence: string;
        strength: string;
        speed: string;
        durability: string;
        power: string;
        combat: string;
    };
    biography: {
        "full-name": string;
        "alter-egos": string;
        aliases: string[];
        "place-of-birth": string;
        "first-appearance": string;
        publisher: string;
        alignment: string;
    };
    image: {
        url: string;
    };
}

export class HeroConfig {
	name: Heroes;
	id: string;

	constructor(params?: Partial<HeroConfig>) {
		Object.assign(this, params);
	}
}
