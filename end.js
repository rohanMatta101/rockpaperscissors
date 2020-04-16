//1 for rock
//2 for scissors
//3 for paper
document.querySelector("button").addEventListener("click",function(){
  var player1=Math.random();
  player1=Math.floor(player1*3)+1;
  var player2=Math.random();
  player2=Math.floor(player2*3)+1;
  if (player1===1 && player2===2)
  {
    document.querySelector(".you").setAttribute("src","icon-rock.svg");
    document.querySelector(".comp").setAttribute("src","icon-scissors.svg");
    document.querySelector(".result").textContent="You win";
  }
  else if (player1===1 && player2===3)
  {
    document.querySelector(".you").setAttribute("src","icon-rock.svg");
    document.querySelector(".comp").setAttribute("src","icon-paper.svg");
    document.querySelector(".result").textContent="Computer wins";
  }
  else if (player1===1 && player2===1)
  {
    document.querySelector(".you").setAttribute("src","icon-rock.svg");
    document.querySelector(".comp").setAttribute("src","icon-rock.svg");
    document.querySelector(".result").textContent="Game drawn";
  }
  //////////////////////////////////////////////////////////////////
  if (player1===2 && player2===1)
  {
    document.querySelector(".you").setAttribute("src","icon-scissors.svg");
    document.querySelector(".comp").setAttribute("src","icon-rock.svg");
    document.querySelector(".result").textContent="Computer wins";
  }
  else if (player1===2 && player2===3)
  {
    document.querySelector(".you").setAttribute("src","icon-scissors.svg");
    document.querySelector(".comp").setAttribute("src","icon-paper.svg");
    document.querySelector(".result").textContent="You win";
  }
  else if (player1===2 && player2===2)
  {
    document.querySelector(".you").setAttribute("src","icon-scissors.svg");
    document.querySelector(".comp").setAttribute("src","icon-scissors.svg");
    document.querySelector(".result").textContent="Game drawn";
  }
  ///////////////////////////////////////////////////////////////////
  if (player1===3 && player2===1)
  {
    document.querySelector(".you").setAttribute("src","icon-paper.svg");
    document.querySelector(".comp").setAttribute("src","icon-rock.svg");
    document.querySelector(".result").textContent="You win";
  }
  else if (player1===3 && player2===3)
  {
    document.querySelector(".you").setAttribute("src","icon-paper.svg");
    document.querySelector(".comp").setAttribute("src","icon-paper.svg");
    document.querySelector(".result").textContent="Game drawn";
  }
  else if (player1===3 && player2===2)
  {
    document.querySelector(".you").setAttribute("src","icon-paper.svg");
    document.querySelector(".comp").setAttribute("src","icon-scissors.svg");
    document.querySelector(".result").textContent="Computer wins";
  }
});
