class hero{
    #health;

    constructor(name, health, attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getHealth(){
        return this.#health;
    }

}

const Hero1 = new hero("Thorin", 100, 100);

console.log(Hero1.getHealth());