import inquirer from "inquirer";
import chalk from "chalk";
let todos =[]
let condition =true;

console.log(chalk.magenta.bold("\n \t wellcome to sajida -Todo-List Application\n"));
while(condition)
{
    let todoQuestion =await inquirer.prompt(
[
{
    name:"firstQuestion",
    type:"input",
    message:'what would you like to add in you todos?'
},
{
    name:'secondQuestion',
    type:"confirm",
    message:"would you like to add more in your todos?",
    default:"true"
}
]
 )
 todos.push(todoQuestion.firstQuestion);
 console.log(todos)
 condition = todoQuestion.secondQuestion;
}

























