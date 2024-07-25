export const getRandomNumber = (min=1000, max=9999) => {
    return Math.ceil(Math.random() * (max - min) + min)
  }

export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export const formatDateName = (date) => {
  if(date === null) {
    return false
  }
  const day = String(date.getDate()).padStart(2, '0');
  const dayName = date.toLocaleDateString('id-ID', {weekday: 'long'})
  const monthName = date.toLocaleDateString('id-ID', {month: 'long'})
  const year = date.getFullYear()
  return `${dayName}, ${day}/${monthName}/${year}`
}
