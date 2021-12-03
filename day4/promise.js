// Promise

// state: PENDING | SUCCESSFUL | FAILURE

// use

const partyPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const random = (Math.random() * 100).toFixed();
    const isEven = random % 2 == 0;
    if (isEven) {
      resolve('Party planned!');
    } else {
      reject('Party dismissed!');
    }
  }, 3000);
});

partyPromise
  .then((v) => console.log(v, 'Party goers happy!'))
  .catch((e) => console.log(e, 'Party goers sad!'))
  .finally((v) => console.log(v, 'Organizer doesn\'t care!'));

console.log('finished!');
