const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 15 }
  ];

  function CheckAdult (users){
    return users.filter(user => user.age > 18);
  }
  console.log(CheckAdult(users));
