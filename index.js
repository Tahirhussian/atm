#! /usr/bin/env node
let bal = 15000;
let atmPin = 1234;
import inquirer from "inquirer";
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter you Pin Number",
    },
]);
if (pinAns.pin === atmPin) {
    let options = await inquirer.prompt([
        {
            name: "select",
            message: "please select the one option",
            type: "list",
            choices: ["withdraw cash", "balance inquiry"],
        },
    ]);
    if (options.select === "withdraw cash") {
        let amountSel = await inquirer.prompt([
            {
                name: "optSel",
                message: "select please",
                type: "list",
                choices: ["fast cash", "enter your amount"],
            },
        ]);
        if (amountSel.optSel === "fast cash") {
            let fastAmount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    message: "please select your amount",
                    choices: [5000, 2000, 1000, 500],
                },
            ]);
            if (fastAmount.amount === 5000) {
                bal -= 5000;
                console.log(`your balance is ${bal}`);
            }
            else if (fastAmount.amount === 2000) {
                bal -= 2000;
                console.log(`your balance is ${bal}`);
            }
            else if (fastAmount.amount === 1000) {
                bal -= 1000;
                console.log(`your balance is ${bal}`);
            }
            else if (fastAmount.amount === 500) {
                bal -= 500;
                console.log(`your balance is ${bal}`);
            }
        }
        else if (amountSel.optSel === "enter your amount") {
            let selAmount = await inquirer.prompt({
                name: "amount",
                type: "number",
                message: "please enter amount",
            });
            if (selAmount.amount <= bal) {
                bal -= selAmount.amount;
                console.log(`balance is : ${bal}`);
            }
            else
                console.log(`insufficent balance`);
        }
    }
    else if (options.select === "balance inquiry") {
        console.log(`your balance is : ${bal}`);
    }
}
else
    console.log("You entered incorrect pin number");
