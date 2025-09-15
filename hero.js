class Hero{
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

class Warrior extends Hero{
    useAbility(){
        console.log(this.name + " uses power Strike!");
    }
}

const Warrior1 = new Warrior("Thorin", 100, 100);
Warrior1.useAbility();