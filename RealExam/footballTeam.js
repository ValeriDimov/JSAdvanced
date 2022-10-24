class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        for (const player of footballPlayers) {
            let [name, age, playerValue] = player.split("/");

            let currentPlayer = this.invitedPlayers.find(p => p.name === name);

            if (!currentPlayer) {
                this.invitedPlayers.push({
                    name,
                    age: Number(age),
                    playerValue: Number(playerValue)
                });
            } else {
                if (Number(playerValue) > currentPlayer.playerValue) {
                    currentPlayer.playerValue = Number(playerValue);
                }
            }
        }
        let playerNamesArr = [];
        this.invitedPlayers.forEach(p => playerNamesArr.push(p.name));

        return `You successfully invite ${playerNamesArr.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");

        let currentPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (Number(playerOffer) < currentPlayer.playerValue) {
            let priceDifference = Number(playerOffer) - currentPlayer.playerValue;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        currentPlayer.playerValue = "Bought";

        const index = this.invitedPlayers.indexOf(currentPlayer);
        this.invitedPlayers.splice(index, 1, currentPlayer);

        return `Congratulations! You sign a contract with ${name} for ${Number(playerOffer)} million dollars.`
    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (currentPlayer.age >= age) {
            return `${name} is above age limit!`
        }

        let ageDifference = age - currentPlayer.age;
        if (ageDifference <= 5) {
           return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
        } else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
    }

    transferWindowResult() {

        if(this.invitedPlayers.length === 0) {
            return;
        }

        let result = "";
        let buff = [];

        result += "Players list:\n";
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name)).forEach(p => buff.push(`Player ${p.name}-${p.playerValue}`));

        result += buff.join("\n");

        return result;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

