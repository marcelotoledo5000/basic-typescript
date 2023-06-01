function showWithVar(){
  var text = 'Marcelo';

  if (true) {
    var text = 'Toledo'
  }

  console.log(text)
}

showWithVar()

function showWithLet() {
  let text = 'Marcelo'

  if (true) {
    let text = 'Toledo'
  }
  console.log(text)
}

showWithLet()
