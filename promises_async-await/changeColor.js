function changeColor(color, ms){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (color==="none")
          document.body.style = color;
      else
        document.body.style.backgroundColor = color;
      resolve();
    }, ms);
  });
}

changeColor("green", 1000)
      .then( ()=>changeColor("red", 1000))
      .then( ()=>changeColor("yellow", 1000))
      .then( ()=>changeColor("black", 1000))
      .then( ()=>changeColor("blue", 1000))
      .then( ()=>changeColor("indigo", 1000))
      .then( ()=>changeColor("orange", 1000))
      .then( ()=>changeColor("none", 1000));
