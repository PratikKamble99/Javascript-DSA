function shuffle(array) {
  // Your implementation
  const newArray = [...array];

  for (let i = newArray.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // console.log(randomIndex);

    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  return newArray;
}

//For the purpose of user debugging.
shuffle([1, 2, 3, 4, 5]);
