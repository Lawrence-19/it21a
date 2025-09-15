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
        console.log(`${this.name} uses power Strike!`);
        this.attack += 60;
        console.log("New attack power: " + this.attack);
    }
}

class Mage extends Hero{
    constructor(name, health, attack, mana){
        super(name, health, attack);
        this.mana = mana;
        
    }
    useAbility(){
        console.log(`${this.name} uses Fireball!`); 
        this.mana -= 10;
        console.log("Mana left: " + this.mana);  
    }
}
console.log();
const Warrior1 = new Warrior("Thorin", 100, 9999);
Warrior1.useAbility();

console.log();

const Mage1 = new Mage("Gandalf", 80, 50, 9999);
Mage1.useAbility();
console.log();