//console.log("welcome to javascripts");

//Question no.1 For the given JSON iterate over all for loops(for,for in,for of,For Each) 
//Answer no.2 var obj=[
                       //{name:"supriya",age:"24",company:"GUVI",}
                       //{name:"priyanka",age:"28",company:"GUVI Geek"}
                       //{name:"Anshu",age:"29",company:"GUVI geek network"}
//]
//create an array contains following details
// Name age company
//create an array data and iterate it using all for loop

var obj = [
    {
        name:"supriya",
        age:"24",
        company:"GUVI"
    },
    {
        name:"priyanka",
        age:"28",
        company:"GUVI Geek"
    },
    {
        name:"Anshu",
        age:"29",
        company:"GUVI Geek Network"
    }

];
//created for loop
  for(var i=0; i<obj.length; i++){
      user=obj[i];
      console.log(user.name);
      console.log(user.age);
      console.log(user.company)
      }
      //created For Each loops
      obj.forEach(((obj)=>{
          console.log(obj);
      }))
      //created for in loop
      // its enumeration based loop that iterate over the indexes
      for(var index in obj){
          console.log(obj[index]);
      }
      //for of loops
      // it is iterate over the values 
      
      for(var obj of obj){
          console.log(obj);
      }
      
                
          











