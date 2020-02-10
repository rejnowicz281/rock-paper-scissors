function computerPlay() {
  let rng = Math.floor(Math.random() * 3);
  return (rng == 0) ? "Rock" :
    (rng == 1) ? "Paper" :
      (rng == 2) ? "Scissors" :
        false;
}
