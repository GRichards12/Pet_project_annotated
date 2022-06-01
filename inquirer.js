const inquirer = require("inquirer"); //lets us use the plugin inquirer as inquirer
const { Cat } = require("./app"); //imports the class Cat from ./app as Cat
const { Sloth } = require("./app");
const { Dragon } = require("./app");
let myPet = {}; // Declares myPet as a mutable object

const catFn = async () => { // defines an asynchronous function, async lets us delay the execution of code until we want it to execute, in conjunction with the 'await' function
    const catAction = await inquirer.prompt({ // await lets us delay this line of code until the resolution of a promise, inquirer.prompt allows us to ask something in the terminal
    type: "list", //type of question asked by inquirer in the terminal
    name: "action", // name of the question
    message: "What would you like to do with your new cat?", // message that'll appear on the terminal
    choices: [
        {
            key: "a", // identifier for this question
            name: "Feed", // what shows up as an answer
            value: "feed", // value returned by this answer
        },
        {
            key: "b",
            name: "Give Water",
            value: "giveWater",
        },
        {
            key: "c",
            name: "Ignore",
            value: "ignore",
        },
    ],
});
if(catAction.action == 'feed'){ // checks what action was chosen by the question
    await myPet.feed() // calls the method from the subclass currently used
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.malevolence < 100){ //checks if game ending conditions are met
        await catFn(); //if the game isn't supposed to end, it'll rerun this function
    }
    else{
        myPet.hungerCheck(); // checks to see which property has ended the game so the game can finish with a customised message
        myPet.thirstCheck();
        myPet.malevolenceCheck();
    }
}
else if(catAction.action == 'giveWater'){
    await myPet.giveWater();
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.malevolence < 100){
        await catFn();
    }
    else{
        myPet.hungerCheck();
        myPet.thirstCheck();
        myPet.malevolenceCheck();
    }
}
else if(catAction.action == 'ignore'){
    await myPet.ignore();
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.malevolence < 100){
        await catFn();
    }
    else{
        myPet.hungerCheck();
        myPet.thirstCheck();
        myPet.malevolenceCheck();
    }
}}

const slothFn = async () => {
    const slothAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do with your new cat?",
    choices: [
        {
            key: "a",
            name: "Feed",
            value: "feed",
        },
        {
            key: "b",
            name: "Hang Out",
            value: "hangOut",
        },
        {
            key: "c",
            name: "Attach Rocket",
            value: "attachRocket",
        },
    ],
});
if(slothAction.action == 'feed'){
    await myPet.feed();
    if(myPet.hunger <100 && myPet.speed < 100 && myPet.chill > 0){
        await slothFn();
    }
    else{
        myPet.hungerCheck();
        myPet.speedCheck();
        myPet.chillCheck();
    }
}
else if(slothAction.action == 'hangOut'){
    await myPet.hangOut();
    if(myPet.hunger <100 && myPet.speed < 100 && myPet.chill > 0){
        await slothFn();
    }
    else{
        myPet.hungerCheck();
        myPet.speedCheck();
        myPet.chillCheck();
    }
}
else if(slothAction.action == 'attachRocket'){
    await myPet.attachRocket();
    if(myPet.hunger <100 && myPet.speed < 100 && myPet.chill > 0){
        await slothFn();
    }
    else{
        myPet.hungerCheck();
        myPet.speedCheck();
        myPet.chillCheck();
    }
}}

const dragonFn = async () => {
    const dragonAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do with your new cat?",
    choices: [
        {
            key: "a",
            name: "Feed Knight",
            value: "feedKnight",
        },
        {
            key: "b",
            name: "Feed Coal",
            value: "feedCoal",
        },
        {
            key: "c",
            name: "Feed Gaviscon",
            value: "feedGaviscon",
        },
    ],
});
if(dragonAction.action == 'feedKnight'){
    await myPet.feedKnight();
    if(myPet.hunger <100 && myPet.coal > 0 && myPet.gaviscon > 0){
        await dragonFn();
    }
    else{
        myPet.hungerCheck();
        myPet.coalCheck();
        myPet.gavisconCheck();
    }
}
else if(dragonAction.action == 'feedCoal'){
    await myPet.feedCoal();
    if(myPet.hunger <100 && myPet.coal > 0 && myPet.gaviscon > 0){
        await dragonFn();
    }
    else{
        myPet.hungerCheck();
        myPet.coalCheck();
        myPet.gavisconCheck();
    }
}
else if(dragonAction.action == 'feedGaviscon'){
    await myPet.feedGaviscon();
    if(myPet.hunger <100 && myPet.coal > 0 && myPet.gaviscon > 0){
        await dragonFn();
    }
    else{
        myPet.hungerCheck();
        myPet.coalCheck();
        myPet.gavisconCheck();
    }
}}


try{ // does this as a promise 

    const start = async () => {
        const typeOfPet = await inquirer.prompt({
            type: "list",
            name: "typeOfPet",
            message: "Please select your animal type!",
            choices: [
                {
                    key: "a",
                    name: "Cat",
                    value: "cat",
                },
                {
                    key: "b",
                    name: "Sloth",
                    value: "sloth",
                },
                {
                    key: "c",
                    name: "Dragon",
                    value: "dragon",
                },
            ],
        });
        const petName = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your pet called?',
        });
        const petAge = await inquirer.prompt({
            type: 'input',
            name: 'age',
            message: 'And how old is your pet?',
        });
        switch(typeOfPet.typeOfPet){
            case 'cat':
                myPet = new Cat(petName, petAge, 10, 10, 10); // makes the pet using the class Cat with those parameters
                await catFn();
                break;
            case 'sloth': 
                myPet = new Sloth(petName, petAge, 0, 1, 100);
                await slothFn();
                break;
            case 'dragon':
                myPet = new Dragon(petName, petAge, 0, 100, 0);
                await dragonFn();
                break;
            default:
                break;


       

            }console.log(myPet);    }
    start();
}
    catch(error) {
        console.log("whoops error");
    } 
