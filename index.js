

const guessingGameStage4 = async (value, point) => {
  console.log('Welcome to stage 4😊😊😊😊')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between 1, 2, 3, 4 and 5`)
  if (parseInt(userValue) == value) {
    console.log('congratulation you have passed stage4🎉🎉🥳🥰')
    point += 1
    console.log(`your point is ${point}`)
    console.log(`Your are a winner🥳🥳🥳🥳`)
    console.log('Ending Game.....')
    console.log('Game Ended.....')

  } else {
    console.log('wrong answer😵')
    console.log('please try again🥺')
    guessingGameStage4((Math.round(Math.random() * 4)) + 1, point)
  }

}

const guessingGameStage3 = async (value, point) => {
  console.log('Welcome to stage 3😊😊😊')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between 1, 2, 3 and 4`)
  if (parseInt(userValue) == value) {
    console.log('congratulation you have passed stage3🎉🎉🥳🥰')
    point += 1
    console.log(`your point is ${point}`)
    guessingGameStage4((Math.round(Math.random() * 4)) + 1, point)
  } else {
    console.log('wrong answer😵')
    console.log('please try again🥺')
    guessingGameStage3((Math.round(Math.random() * 3)) + 1, point)
  }

}




const guessingGameStage2 = async (value, point) => {
  console.log('Welcome to stage 2😊😊')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between 1, 2 and 3`)
  if (parseInt(userValue) == value) {
    console.log('congratulation you have passed stage2 🎉🎉🥳🥰')
    point += 1
    console.log(`your point is ${point}`)
    guessingGameStage3((Math.round(Math.random() * 3)) + 1, point)
  } else {
    console.log('wrong answer😵')
    console.log('please try again🥺')
    guessingGameStage2((Math.round(Math.random() * 2)) + 1, point)
  }

}
const guessingGameStage1 = async (value, point) => {
  console.log('Welcome to stage 1😊')
  console.log(`your current point is ${point}`)
  let userValue = await prompt(`choose between 1 and 2`)
  if (parseInt(userValue) == value) {
    console.log('congratulation you have passed stage1🎉🎉🥳🥰')
    point += 1
    console.log(`your point is ${point}`)
    guessingGameStage2((Math.round(Math.random() * 2)) + 1, point)
  } else {
    console.log('wrong answer😵')
    console.log('please try again🥺')
    guessingGameStage1((Math.round(Math.random() * 1)) + 1, point)
  }

}



const guessingGame = async () => {

  let point = 0
  let userInput = await prompt(`Enter username`)
  let username = userInput
  if (username.length != 0) {
    console.log(`welcome ${username} 👋`)
    guessingGameStage1((Math.round(Math.random() * 1)) + 1, point)
  } else {
    console.log('Enter your username')

  }


}

guessingGame()


