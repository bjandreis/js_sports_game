/*  Variables for the reset function. */
let resetCount = 0
const resetButton = document.querySelector("#reset-button")
const numResets = document.querySelector("#num-resets")

/*  Variables for team 1. */
let team1Shots = 0
let team1Goals = 0
const teamOneShootButton = document.querySelector("#teamone-shoot-button")
const teamOneNumShots = document.querySelector("#teamone-numshots")
const teamOneNumGoals = document.querySelector("#teamone-numgoals")

/*  Variables for team 2. */
let team2Shots = 0
let team2Goals = 0
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")
const teamTwoNumShots = document.querySelector("#teamtwo-numshots")
const teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")

/*  Configure the reset counter to increment by 1 every time the reset button is clicked.
    Set the score and shots taken to zero for both teams when the reset button is clicked. */
resetButton.addEventListener("click", function () {
    resetCount = resetCount + 1
    
    /* Compare the scores of team 1 and team 2 and determine the winner. */
    if (team1Goals > team2Goals) {
        alert("The Red Rottweilers: " + team1Goals + "\n" + "The Blue Beagles: " + team2Goals + "\n\n" + "The Red Rottweilers are victorious!")
    } else if (team2Goals > team1Goals) {
        alert("The Red Rottweilers: " + team1Goals + "\n" + "The Blue Beagles: " + team2Goals + "\n\n" + "The Blue Beagles are victorious!")
    } else {
        alert("The Red Rottweilers: " + team1Goals + "\n" + "The Blue Beagles: " + team2Goals + "\n\n" + "The game is a draw!")
    }

    /* Display resets in the console log */
    if (resetCount === 1) {
        console.log("Game has been reset " + resetCount + " time.")
    } else {
        console.log("Game has been reset " + resetCount + " times.")
    }

    /* Reset everything */
    numResets.innerText = resetCount
    team1Shots = 0
    team1Goals = 0
    team2Shots = 0
    team2Goals = 0
    teamOneNumShots.innerText = 0
    teamOneNumGoals.innerText = 0
    teamTwoNumShots.innerText = 0
    teamTwoNumGoals.innerText = 0
})

/*  Configure the number of shots by team 1 to increase by 1 every time the shoot button is clicked.
    Team 1's number of goals have a random chance of increasing by 1 if the shoot button is clicked. */
teamOneShootButton.addEventListener("click", function () {
    team1Shots = team1Shots + 1
    teamOneNumShots.innerText = team1Shots

    let shotChance = Math.random()

    if (shotChance < 0.5) { /* Team 1 has a 50% chance of either succeeding or failing. */
        team1Goals = team1Goals + 1
        teamOneNumGoals.innerText = team1Goals
        console.log("Team 1 shoots... and they score!")
        console.log("Team 1 shot count: " + team1Shots)
        console.log("Team 1 goal count: " + team1Goals)
        /* Play score sound */
        let audio = new Audio("./assets/audio/michael_rosen_noice.mp3");
        audio.play()
    } else {
        console.log("Team 1 shoots... but they miss.")
        console.log("Team 1 shot count: " + team1Shots)
        console.log("Team 1 goal count: " + team1Goals)
        /* Play miss sound */
        let audio = new Audio("./assets/audio/roblox_oof.mp3");
        audio.play()
    }
})

/*  Configure the number of shots by team 2 to increase by 1 every time the shoot button is clicked.
    Team 2's number of goals have a random chance of increasing by 1 if the shoot button is clicked. */
teamTwoShootButton.addEventListener("click", function () {
    team2Shots = team2Shots + 1
    teamTwoNumShots.innerText = team2Shots
    
    let shotChance = Math.random()
        
    if (shotChance < 0.5) { /* Team 2 has a 50% chance of either succeeding or failing. */
        team2Goals = team2Goals + 1
        teamTwoNumGoals.innerText = team2Goals
        console.log("Team 2 shoots... and they score!")
        console.log("Team 2 shot count: " + team2Shots)
        console.log("Team 2 goal count: " + team2Goals)
        /* Play score sound */
        let audio = new Audio("./assets/audio/michael_rosen_noice.mp3");
        audio.play()
    } else {
        console.log("Team 2 shoots... but they miss.")
        console.log("Team 2 shot count: " + team2Shots)
        console.log("Team 2 goal count: " + team2Goals)
        /* Play miss sound */
        let audio = new Audio("./assets/audio/roblox_oof.mp3");
        audio.play()
    }
})