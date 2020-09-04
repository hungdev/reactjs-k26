export const processImage = (data) => {
  const imgUrl = data.replace('uploads', '')
  return `http://mobileshop.hungvu.net/${imgUrl}`

}