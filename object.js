//object

var myself = {
  name: "chew" ,
  languages: ["java","javascript"] ,
  task: function(){
    this.languages.forEach(function(language){ console.log(this.name+" is learning "+language+"!"); } , this) ;
  }
}


myself.task()
