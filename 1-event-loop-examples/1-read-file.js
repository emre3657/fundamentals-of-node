const { readFile } = require("fs");
console.log("started a first task");
// Check the path
readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("completed first task");
});
console.log("starting next task");

/* 
started a first task
starting next task
err || data \n completed first task 
*/
