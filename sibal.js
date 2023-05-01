const fetchRootData = async () => {
  try {
    const res = await fetch(
      'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/',
      {
        method: "GET",
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    const data = await res.json();
    res.status === 200 ? console.log(data) : null
  } catch (err) {
    console.error(err, 'something went wrong');
  }
};

fetchRootData();
