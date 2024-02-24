// import inquirer from "inquirer"
// const systemGeneratedNo = Math.floor(Math.random() * 10)
// console.log(systemGeneratedNo)


// import inquirer from "inquirer";

// type ansType = {
//     userGuess : number
// }
// const systemGeneratedNo = Math.floor(Math.random() * 10)

// const answers: ansType = await inquirer.prompt([
//     {
//         type: "number",
//         name : "userGuess",
//         message: "Enter your guess number from 1 to 10"
//     }
// ])
// console.log(answers.userGuess)



import inquirer from "inquirer";

type ansType = {
    userGuess : number
}
const systemGeneratedNo = Math.floor(Math.random() * 10)

const answers: ansType = await inquirer.prompt([
    {
        type: "number",
        name : "userGuess",
        
        message: "Enter your guess number from 1 to 10"
    }
])
const {userGuess} = answers
console.log(userGuess, "userGuess", systemGeneratedNo, 'systemNo.')
if(userGuess == systemGeneratedNo){
    
    console.log("Yay! your guess is correct \n You won")
} else{
    console.log("please try again , Better luck next time")
}

