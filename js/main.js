document.querySelector('#rollDice').addEventListener('click', makeReq)

async function makeReq(){
  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#diceRollResultOne").textContent = data.rollOne
  document.querySelector("#diceRollResultTwo").textContent = data.rollTwo
  document.querySelector("#product").textContent = data.product
}


/*
I am interested in adding a second button here that sees the result from the dice roll and gives the product. That way you can practice the product before it pops up.

*/