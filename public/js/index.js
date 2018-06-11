function send(url, dataa, cb) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      data: dataa,


    }),
    headers: {
      'content-type': 'application/json',
    },
  })

    .then(res => res.json())
    .then((msg) => {
      cb(msg);
    })
    .catch((error) => {
      console.log('there was an error', error);
    });
}
