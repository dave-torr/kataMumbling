function accum(word){
    var e = 0; var s = "";
    while (e <word.length - 1){
          s=s+word[e].repeat(e+1) + "-";
       e = e+1
       } 
    s=s+word[e].repeat(e+1);
    console.log(s)
  }

  //https://codepen.io/dave-torr/pen/KKwyGpK codepen tests: most complicated kata. ended up using internally declarated variables.