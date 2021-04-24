// Question 1 ******************************************

let array1=[1,2,3,12,23,4,55,67];
let result =  array1.filter(num => num>20).reduce((acc,n) =>acc+=n,0);
console.log(result);

//Question 2 *******************************************

let strArray = ['anna','johnatan', 'smith','antehun','haymanot'];
let result2 = strArray.filter(elem => elem.length>=5 && elem.includes('a'));
console.log(result2);

//Question 3 **********************************************
function Employee(firstName, lastName, birthDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.getFullName = function(){
        return this.firstName +' '+ this.lastName;
    }
    this.getAge = function(){
      return Math.floor((Date.now()-birthDate)/31536000000);

    }

}

const arrEmp = [new Employee('haymi','adane',new Date('December 17, 2005 03:24:00'))
, new Employee('almaz','yelma',new Date('December 17, 1995 03:24:00'))
, new Employee('John','Smith',new Date('December 17, 2015 03:24:00'))];
   //const arrEmp = [new Employee('haymi','adane', 22)];
   let result3 = arrEmp.filter(e1 => e1.getAge()>20);
   let result4 = arrEmp.filter(e2 => e2.birthDate.getFullYear()>=2000).map(e3 => e3.getFullName().toString());

   console.log(result3);
   
  for(let len of result4){
      console.log(len);
  }
 
