class houseKeeper {
    constructor(name , yearOfExperience , cleaningRepertoire) {
        this.name = name;
        this.yearOfExperience = yearOfExperience;
        this.cleaningRepertoire = cleaningRepertoire;
    }
    clean() {
        return "Cleaning in progress";
    }
}

var houseKeeper1 = new houseKeeper("jane", 12 , ["bathroom","lobby","bedroom"]);

console.log(houseKeeper1.name);
console.log(houseKeeper1.yearOfExperience);
console.log(houseKeeper1.cleaningRepertoire);
console.log(houseKeeper1.clean());

function Bellboy(name, yearOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearOfExperience = yearOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        return "Cleaning in progress";
    }
}

var Bellboy1 = new Bellboy("John", 10, ["janitor","kitchen"]);

console.log("");
console.log(Bellboy1.name);
console.log(Bellboy1.yearOfExperience);
console.log(Bellboy1.cleaningRepertoire);
console.log(Bellboy1.clean());