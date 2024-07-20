export const getRandomNumber = (min=1000, max=9999) => {
    return Math.ceil(Math.random() * (max - min) + min)
  }