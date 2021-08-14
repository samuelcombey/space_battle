// 
const spaceship = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        let shortRan = ranNum.toFixed(2)
       alert(`Accuracy threshold is ${shortRan}`)
        if (shortRan < this.accuracy) {
            alert(`It's a direct hit!! Well done Capitan!`)
            target.hull = target.hull - this.firepower;
            alert(`alien has ${target.hull} hull points left.`)
            if (target.hull <= 0) {
                target.isAlive = false;
                alert(`Alien ship is destroyed!!`)
            }
        } else {
            alert(`you missed!`)
        }
    }
}
const aliens = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, 
    isAlive: true,
    attack(target) {
        let ranNum = Math.random()
        let shortRan = ranNum.toFixed(2)
        alert(`Accuracy threshold is ${shortRan}`)
        if (shortRan< this.accuracy) {
            alert(`You've been hit!`)
            target.hull = target.hull - this.firepower;
            alert(`hero has ${target.hull} hull points left.`)
            if (target.hull <= 0) {
                target.isAlive = false;
                alert(`You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`)
            }
        } else {
            alert(`You dodged the attack!`)
        }
    }
}

const battle = (player, computer) => {
    
    var remainingShips = 6
    while (remainingShips > 0 && player.isAlive) {     
        let userInput = prompt("Enemy Space Fleet approaching!! \n" + remainingShips + " ships perfectly in a row, do you wish to engage? (yes or no)")

            if (userInput == 'yes') {
                while (player.isAlive && computer.isAlive) {
                    player.attack(computer)
                    if (computer.isAlive) {
                        computer.attack(player);
                    }
                }
                
            } else { 
                alert("You have retreated. Refresh page to start again.")
                return
            }
            remainingShips--
            computer.isAlive = true
    }        
}



battle(spaceship, aliens)