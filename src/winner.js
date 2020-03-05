const winner = (userChoice, computerChoice) => {
    
    let result
    let history
  
   
      switch (true) {
        case userChoice == 'rock' && computerChoice == 'paper':
          return result = 'Computer won'
        case userChoice == 'rock' && computerChoice == 'scissor':
          return result = 'User won'
        case userChoice == 'rock' && computerChoice == 'rock':
          return result = 'tied'
  
        case userChoice == 'paper' && computerChoice == 'paper':
          return result = 'tied'
        case userChoice == 'paper' && computerChoice == 'rock':
          return result = 'User won'
        case userChoice == 'paper' && computerChoice == 'scissor':
          return result = 'Computer won'
  
        case userChoice == 'scissor' &&computerChoice == 'paper':
          return result = 'user won'
        case userChoice == 'scissor' &&computerChoice == 'rock':
          return result = 'Computer won'
        case userChoice == 'scissor' &&computerChoice == 'scissor':
          return result = 'tied'
  
  
  
  
      }
   
  
        
      return result
       
    debugger
  }
  export default winner;