const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout
});

rl.question("What's your name? Nicknames are also acceptable :)?", (answer1) => {
  // TODO: Log the answer in a database
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        console.log(`Nickname: ${answer1}\nActivity: ${answer2}\nMusic: ${answer3}\nMeal: ${answer4}`)
        //and so on...
        
        rl.close()
      })
    })
  })
})

//rl.question("What's an activity you like doing?", (answer) => {
//console.log(`Thank you for your valuable feedback: ${answer}`)
//
//  rl.close()
//})

//What do you listen to while doing that?
//Which meal is your favourite (eg: dinner, brunch, etc.)
//What's your favourite thing to eat for that meal?
//Which sport is your absolute favourite?
//What is your superpower? In a few words, tell us what you are amazing at!