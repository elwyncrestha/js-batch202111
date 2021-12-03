// async/await

async function test() {
  const partyPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const random = (Math.random() * 100).toFixed();
      const isEven = true;
      if (isEven) {
        resolve('Party planned!');
      } else {
        reject('Party dismissed!');
      }
    }, 1500);
  });
  
  const response = await partyPromise;
  console.log(response);

  console.log('finished!');

}

test();