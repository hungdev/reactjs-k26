export const processImage = (data) => {
  const imgUrl = data && data.replace('uploads', '')
  return `http://mobileshop.hungvu.net/${imgUrl}`
}