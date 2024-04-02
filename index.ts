#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 20000;
const myPin = 1999;

let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code",
    },
]);

if (pinEntered.pin === myPin) {
    let atmQuestion = await inquirer.prompt([
        {
            name: "accountType",
            type: "list",
            message: "Select your account type",
            choices: ["Current Account", "Saving Account"],
        },
        {
            name: "transMethod",
            type: "list",
            message: "Select your transaction method",
            choices: ["Fast cash", "Withdrawal cash"],
        },
    ]);
    if (atmQuestion.transMethod === "Withdrawal cash") {
        let cashWithdrawalCash = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter your amount",
            },
        ]);
        if (myBalance >= cashWithdrawalCash.withdraw) {
            myBalance -= cashWithdrawalCash.withdraw;
            console.log(`Your remaning balance is :${myBalance}`);
        } else {
            console.log("Insufficient balance");
        }
    } else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select the amount",
                choices: ["1000", "3000", "5000", "10000"]
            }
        ]);
        if (myBalance >= fastCashAmount.fastCash) {
            myBalance -= fastCashAmount.fastCash
            console.log(`Your balance is :${myBalance}`);

        } else {
            console.log("Insufficient balance");

        }
    }
} else {
    console.log("Incorrect pin code");

}
