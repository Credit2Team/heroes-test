# Coding Test

There's a series of questions and tasks below.  If you're comfortable with GIT then please create a separate commit for each answer / task

If you're unsure or want to skip ahead please feel free to outline how you would tackle the problem or if you understand some of the underlying mechanics.  We'll discuss afterwards regardless



### Tasks

1. Our PO has come to us in a hurry.  Users are freaking out that they can't see details of a hero when it is selected, someone has released a bug into production 😱.  Fix the bug so we can get on with the rest of the test!

2. Phew! Users are (marginally) happier.  Now they demand the following changes on the hero details component
- Hero name should be in uppercase
- Display the hero's super power below the hero Id
3. During an awkward mushroom trip our PO has demanded that only heroes with an 'e' in their name should be displayed on the dashboard.  We must obey! 🤦‍♂️ 
4. After a long comedown, our PO has now demanded that the heroes on the dashboard should automatically refresh after 2 seconds
5. The PO has emailed from rehab and has said users who are slow typists are angry that search results are appearing in the search too quickly, they need at least 2 seconds of typing before a search should be executed 
6. Your angry dev lead has reviewed the search functionality.  Every API hit is costing us money! 💸  We shouldn't be searching again if the user deletes and types the same letter
7. While on the war-path your angry dev lead has noticed a few issues with the dashboard component
  - Heroes are being stored as a public variable on the dashboard component, do you have any ideas on how to improve this?
  - He also mentioned there is a potential memory leak.  Fix it if you can spot it...

### Questions

1. What will we see in the console when the following snippet is executed?
```
function printMe(value){
  console.log('value is', value);
}

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    printMe(i);
  }, 1000);
}
```

2. What will we see in the console when the following snippet is executed?

```
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');
  
```
