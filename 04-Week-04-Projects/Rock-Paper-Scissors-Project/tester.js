function printHelp() {
    console.log("  Type 'r' for Rock");
    console.log("  Type 'p' for Paper");
    console.log("  Type 's' for Scissors");
    console.log("  Type 'q' to quit");
    console.log("  Type 'h' for a list of valid commands\n");
  }
  
  function getWinner(move1, move2) {
    if (cmd === cpu) { // tie
        console.log("You tie.\n");
        ties++;
    } else if (VALID_MOVES[cmd].winsAgainst === cpu) { // win
        console.log("You win!\n");
        wins++;
    } else { // loss
        console.log("You lose...\n");
        losses++;
    }
  }
  
  function getCPUMove() {
    const validMoveKeys = Object.keys(VALID_MOVES);
    const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
    const cpu = validMoveKeys[randomIndex];
    return cpu;
  }
  
  function processMove(cmd, cpu) {
    if (cmd === 'h') {
        console.log("\nHelp:\n");
        printHelp();
    } else if (cmd === 'q') {
        rl.close();
        return;
    } else if (VALID_MOVES[cmd]){
        console.log(`You pick ${cmd}, computer picks ${cpu}.`);
       getWinner(cmd, cpu);
    } else {
        console.log("\nInvalid command.\n");
        printHelp()
    }
  }
  
  /******************************* MAIN FUNCTION *******************************/
  function promptInput(rl) {
    console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
    rl.question('> ', (cmd) => {
      cmd = cmd.toLowerCase();
      getCPUMove();
      processMove(cmd, cpu);
 
      promptInput(rl);
    });
  }
  