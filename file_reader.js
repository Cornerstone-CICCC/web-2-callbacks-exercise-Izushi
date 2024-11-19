const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const modifiedData4 = data4.replace(/[\[\]"]/g, '');
        const hobbies = modifiedData4.split(",");
        console.log(hobbies[0]);
        console.log(`${data1} ${data2} is ${data3} years old and his hoobies are ${hobbies[0]} and ${hobbies[1]}`);
      });
    });
  });
})