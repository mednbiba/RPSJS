const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if( userInput==='bomb'||
        userInput==='rock'||
        userInput==='paper'||
        userInput==='scissors'){
          return userInput
        }
        else{ return('INVALID') }
  
  };
  
  const getComputerChoice = () => {
    min = Math.ceil(1);
    max = Math.floor(3);
   let computerChoice=  Math.floor(Math.random() * (max - min + 1) + min);
   if(computerChoice==1){
     return('rock')
   }else if(computerChoice==2){
     return('paper')
   } else{return ('scissors')}
  
  }
  const determineWinner = (human,computer) => {
    if(human==computer){return('TIE')}
    if(human==='rock'){
      if(computer==='paper')
      {return('COMPUTER WINS')}
      else{return('USER WINS')}
  
    }
    else if(human==='paper'){
      if(computer==='scissors')
      {return('COMPUTER WINS')}
      else{return('USER WINS')}
  
    }
    else if(human==='scissors'){
      if(computer==='rock')
      {return('COMPUTER WINS')}
      else{return('USER WINS')}
  
    }
    else if(human==='bomb')
    {
      return('USER WINS')
    }
     
  }
  console.log(determineWinner(getUserChoice('bomb'),getComputerChoice()))
  
