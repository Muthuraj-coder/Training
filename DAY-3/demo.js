  let date = new Date();
    console.log(date.getDate());
    console.log(date.getDay()); // 0-6 (0 is Sunday, 1 is Monday, etc.)
    console.log(date.getFullYear());
    console.log(date.getMonth()); // 0-11 (0 is January, 1 is February, etc.)
    console.log(date.getHours());// 0-23
    console.log(date.getMinutes()); // 0-59
    
    let nums=[1,2,3,4];
    let addby=nums.map((num=> num+1));
    console.log(addby);

    let total=nums.reduce((sum,n)=> sum+n,0);
    console.log(total);

    //for each
    nums.forEach((num) => {
        console.log(num);
    });
    //filter
    let even=nums.filter((num) => num%2==0);
    console.log(even);


    const students={
        name: "John",
        age: 20,
        city: "New York",
        address: {
            street: "123 Main St",
            zip: "10001",
        },
        clg:"Kec"
    }
    console.log(students.name);
    console.log(students.age);
    console.log(students.city);
    console.log(students.address.street);
    console.log(students.address.zip);
    console.log(students.clg);
    
    
    //set
    let mySet = new Set(['apple', 'banana', 'orange','apple']);
    mySet.add('grape');
    mySet.delete('banana'); 
    console.log(mySet.has('apple')); // true
    console.log(mySet.size); // 3
    console.log(mySet); // Set { 'apple', 'orange', 'grape' }

    //map
    let myMap = new Map();
    myMap.set('name', 'John');
    myMap.set('age', 30);
    myMap.set('city', 'New York');
    console.log(myMap.get('name')); // John
    console.log(myMap.get('age')); // 30    
    console.log(myMap.get('city')); // New York
    console.log(myMap.has('name')); // true

    //Destructuring
    let marks=[97, 98, 99];
    let [math, physics, chemistry] = marks;
    console.log(math); // 97
    console.log(physics); // 98
    console.log(chemistry); // 99
    
    //console Object
    console.log("Hello World");
    console.error("This is an error message");  
    console.warn("This is a warning message");
    console.info("This is an info message");
    console.table([{name: "John", age: 20}, {name: "Jane", age: 22}]);
    console.group("Group 1");
    console.time("Timer");
    

    //
    localStorage.setItem("name", "John");
    localStorage.setItem("age", "30");
    sessionStorage.setItem("sessionName", "Doe");
    sessionStorage.setItem("sessionAge", "25");
    console.log("Local Storage:");
    console.log("Name:", localStorage.getItem("name")); 
    console.log("Age:", localStorage.getItem("age"));
    console.log("Session Storage:");
    console.log("Session Name:", sessionStorage.getItem("sessionName"));
    console.log("Session Age:", sessionStorage.getItem("sessionAge"));