const winner = (userChoice, computerChoice) => {
    
    let result
    let history
  
  
   
      switch (true) {
        case userChoice == 'rock' && computerChoice == 'paper':
          return result = (`Computer chose ${computerChoice} you lost`)
        case userChoice == 'rock' && computerChoice == 'scissor':
          return result =  (`Computer chose ${computerChoice} you won`)
        case userChoice == 'rock' && computerChoice == 'rock':
          return result =  (`Computer chose ${computerChoice} it's tied`)

        case userChoice == 'paper' && computerChoice == 'paper':
          return result = (`Computer chose ${computerChoice} it's tied`)
        case userChoice == 'paper' && computerChoice == 'rock':
          return result = (`Computer chose ${computerChoice} you won`)
        case userChoice == 'paper' && computerChoice == 'scissor':
          return result = (`Computer chose ${computerChoice} you lost`)
  
        case userChoice == 'scissor' &&computerChoice == 'paper':
          return result = (`Computer chose ${computerChoice} you won`)
        case userChoice == 'scissor' &&computerChoice == 'rock':
          return result = (`Computer chose ${computerChoice} you lost`)
        case userChoice == 'scissor' &&computerChoice == 'scissor':
          return result = (`Computer chose ${computerChoice} it's tied`)
  
  
  
  
      }
   
  
        
      return result
       
    debugger
  }
  export default winner;