//importing the readline sync
var readlineSync=require("readline-sync");

// importing the chalk
var chalk = require("chalk");



// Greeting Message
console.log("----------------------------------------");
console.log("Welcome To Movies Quiz by Rama Chandran");
console.log("----------------------------------------");

// Getting the user name
var user_name=readlineSync.question("Enter your name:");


// selecting the universe
var universes=["Marvel","DC"];
var selected_universe=readlineSync.keyInSelect(universes,"Which comic universe do you like?");


// Marvel unverse questions and answers
var marvel_universe=[
  {
      question:"where is wakanda located?",
      options:["South America","Africa","Antartica","Australia"],
      answer:"2",
  },
  {
    question:"Thor's Hammer Mjolnir is made of metal from the heart of dying what?",
    options:["Asteroid","comet","star","Black Hole"],
    answer:"3",
  },
  {
    question:"What is the name of the marvel comic legend who has made an appearance in all the films of the marvel cinematic universe?",
    options:["jack kirby","stan lee","walter norris","steve rogers"],
    answer:"2",
  },
  {
    question:"How does yondu control the yaka arrow?",
    options:["By Whistling","with telepathy","By winking","By flicking his wrist"],
    answer:"1",
  },
  {
    question:"what is the wifi password karl mordo hands to doctor strange?",
    options:["Dormammu","Kamar-Taj","Shamballa","Agamotto"],
    answer:"3",
  }
]

// DC universe questions and answers
var dc_universe=[
  {
    question:"What is the name of Batman's butler?",
    options:["Henry Farthing","Charles Pennyfarthing","Alfred Pennyworth","Alfred Wayne"],
    answer:"3",
  },
  {
    question:"How did the original Flash get his powers?",
    options:["Gamma radiation","Time wrap","Dr.Strange","Inhaled Nuclear fumes"],
    answer:"4",
  },
  {
    question:"What is Superman's dad's name?",
    options:["Jack-kent","Kerilion","Orlando","jor-el"],
    answer:"4",
  },
  {
    question:"What is the Superman logo a Kryptonian symbol for?",
    options:["Hope","Power","Beauty","Aliens"],
    answer:"1",
  },
  {
    question:"Where is Superman's home?",
    options:["Gotham","Galactus","Metropolis","Krypton"],
    answer:"4",
  }
]


//highscore
var highscore=[{
  name:"Aravind",
  score:4,
},
{
  name:"Ravi",
  score:4
}];


var score=0,choice,user_answer;

function play(question,options,answer)
{
  // Displaying question
    console.log("\n\n"+question+"\n");

    // Displaying options
    for(let j=0;j<options.length;j++)
    {
      console.log((j+1)+")"+options[j]);
    }

    // Getting the user answer
    user_answer=readlineSync.question("\nChoose Your options:");

    //Checking the answer
    if(user_answer==answer)
    {
      console.log(chalk.green("Right Answer"));
      score=score + 1;
    }
    else
    {
      console.log(chalk.red("Wrong Answer"));
      console.log(chalk.green.bold("Correct answer is :"+answer));
    }


    // Displaying the current score
    console.log("Your Current Score is : "+score);

}


if(selected_universe==0)
{
  console.log("\n-----------------------------");
  console.log(chalk.bgRed.white.bold("You Selected Marvel Universe"));
  console.log("-----------------------------\n");


  // Displaying question and getting the answer
  for(let i=0;i<marvel_universe.length;i++)
  {
    
    // Calling the play function
    play(marvel_universe[i].question,marvel_universe[i].options,marvel_universe[i].answer);
    
    //Exit
    if(i!=marvel_universe.length-1)
    {
      choice=readlineSync.question(chalk.redBright("\nPress e to exit"));
      if(choice=='e')
      break;
    }
  }
}
else if(selected_universe==1)
{
  console.log("-----------------------------");
  console.log(chalk.bgYellow.black.bold("You Selected DC Universe"));
  console.log("-----------------------------");

  
  // Displaying question and getting the answer
  for(let i=0;i<dc_universe.length;i++)
  {
    
    // Calling the play function
    play(dc_universe[i].question,dc_universe[i].options,dc_universe[i].answer);

    //Exit
    if(i!=dc_universe.length-1)
    {
      choice=readlineSync.question(chalk.redBright("\nPress e   to exit"));
      if(choice=='e')
      break;
    }
  }
}



// Greeting Message
console.log("\n\n------------------------------------------------------------------------");
console.log(chalk.yellowBright("Thank You for Participating "+user_name));

// Final score
console.log(chalk.blueBright.bold("Your Score is "+score));


// Checking current score > high score 
for(var i=0;i<highscore.length;i++)
{
  if(highscore[i].score < score)
  {
    console.log(chalk.green("\nYay! You Have Beaten the High Score"));
    console.log(chalk.green("Please send the screenshot to me to add in the high score table"));
    break;
  }
}

console.log("------------------------------------------------------------------------");


//High score table
console.log("\n\n-----------------");
console.log("High Score Table");
console.log("-----------------");

for(var i=0;i<highscore.length;i++)
{
  console.log("\n"+(i+1)+")Name:"+highscore[i].name);
  console.log("  Score:"+highscore[i].score);
}