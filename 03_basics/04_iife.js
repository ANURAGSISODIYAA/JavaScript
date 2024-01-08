// Immediatiely Invoked function expresions

( function open(){
   console.log(`DB connected`);
})();

( (name) => {
  console.log(`DB unconnected ${name}`);
})("Anurag");