window.onload = function(){
    const a = this.Object.create(this.String);
    a.text = 'This house is not nice!';
    a.filter = function(){
        let arr = a.text.split('not ');
        let result = "";
        for(let i=0;i<arr.length;i++){
            result+=arr[i];
        }
        return result;
    }
    this.console.log(a.filter());



    const myObj = {
        arr : [],
        bubbleSort : function(){
            for(let i=0;i<this.arr.length-1;i++){
                for(let j=0; j<this.arr.length-i-1;j++){
                    if(this.arr[j]>this.arr[j+1]){
                        let temp = this.arr[j];
                        this.arr[j] = this.arr[j+1];
                        this.arr[j+1]=temp;
                    }
                }
            }
            return this.arr;
        }
    };
    myObj.arr = [2,8,1,3];
    this.console.log(myObj.bubbleSort());


    function Person (){
        this.name = '';
        this.teach= function (subject){
            return this.name + " is now teaching " + subject;
        }
    }

    const teacher = new Person();
    teacher.name = 'Ali';
    console.log(teacher.teach('math'));




    function Person2 (){
        this.name = 'John';
        this.age = '35';
        greating= function (){
            return "Greeting! my name is "+ this.name + " and i am " + this.age + " years old.";
        }
        this.salute = function(){
            return "Good morning, and in case i dont see you, good afternoon, good evening, and good night!";
        }
    }

    const student = new Person2();
    student.major = 'cs';
    student.greeting = function(){
        console.log("Hey, my name is "+this.name+" and I am studying "+this.major);
    }
    student.greeting();

    const professor = new Person2();
    professor.name = 'Bob';
    professor.department = 'CS';
    professor.greeting = function(){
        console.log("Hey, my name is "+this.name+" and I am in the "+this.department +" department.");
    }
    professor.greeting();


    const Person3={
        name : 'John',
        age : '35',
        greating: function (){
            return "Greeting! my name is "+ this.name + " and i am " + this.age + " years old.";
        },
        salute : function(){
            return "Good morning, and in case i dont see you, good afternoon, good evening, and good night!";
        }
    }

    const student2 = Object.create(Person3);
    student2.major = 'cs';
    student2.greeting = function(){
        console.log("Hey, my name is "+this.name+" and I am studying "+this.major);
    }
    student2.greeting();

    const professor2 = Object.create(Person3);
    professor2.name = 'Bob';
    professor2.department = 'CS';
    professor2.greeting = function(){
        console.log("Hey, my name is "+this.name+" and I am in the "+this.department +" department.");
    }
    professor2.greeting();


}