// Importa las imágenes
const imageContext = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);

// Crea un objeto de imágenes
const images = imageContext.keys().reduce((acc: { [key: string]: string }, path: string) => {
  const key = path.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  acc[key] = imageContext(path).default;
  return acc;
}, {});

export default images;
