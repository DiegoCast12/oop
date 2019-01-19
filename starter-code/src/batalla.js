class Guerrero{
    constructor(healthArt, strengthArg){
        this.health = healthArt;
        this.strength = strengthArg;
    }
    
    attack(){
        return this.strength;   
    }

    receiveDamage(damage){
        this.health = this.health - damage
    }
}

class Jedi extends Guerrero {
        constructor(name, health, strength){
            super(health,strength);
            this.name = name;
        }   

        battleCry(){
            return "May the force be with us!"
        }

        receiveDamage(damage){
            this.health = this.health - damage;
            if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
            } else if (this.health <= 0){
            return this.name + " has died in act of combat";
        }
    }
}

class Sith extends Guerrero {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        if (this.health > 0){
            return "A Sith" + " has received " + damage + " points of damage";
        } else if (this.health <= 0){
            return "A Sith" + " has died in combat";
        } 
    } 
}

class Batalla{

    constructor(){
        this.jediArmy = [];
        this.sithArmy = [];
    }

    addJedi(jedi){
        this.jediArmy.push(jedi)
    }
    
    addSith(sith){
        this.sithArmy.push(sith);
    }

    jediAttack(){
        let randomSith = this.sithArmy[Math.floor(Math.random() * this.sithArmy.length)];  
        let randomJedi = this.jediArmy[Math.floor(Math.random() * this.jediArmy.length)];
    
        if (randomSith.health > randomJedi.strength) {
            return randomSith.receiveDamage(randomJedi.attack());    
    
        } else if (randomSith.health < randomJedi.strength ) {
    
        let index = this.sithArmy.findIndex(function(currentSith){
            return currentSith.strength !== randomSith.strength && currentSith.health !== randomSith.health;
        });
    
        this.sithArmy = this.sithArmy.splice(index, 1);
    
        return randomSith.receiveDamage(randomJedi.attack());    
        } 
    }

    sithAttack(){
        let randomSith = this.sithArmy[Math.floor(Math.random() * this.sithArmy.length)];  
        let randomJedi = this.jediArmy[Math.floor(Math.random() * this.jediArmy.length)];
    
        if (randomJedi.health > randomSith.strength) {
        return randomJedi.receiveDamage(randomSith.attack());    
    
        } else if (randomJedi.health < randomSith.strength ) {
    
        let index = this.jediArmy.findIndex(function(currentJedi){
            return currentJedi.strength !== randomJedi.strength && currentJedi.health !== randomJedi.health;
        });
    
        this.jediArmy = this.jediArmy.splice(index, 1);
    
        return randomJedi.receiveDamage(randomSith.attack());    
        }  
    }
}

module.exports = {
    Guerrero,
    Jedi,
    Sith,
    Batalla    
}
