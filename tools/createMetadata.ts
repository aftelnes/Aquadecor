type CreateMetadata = {
  text: string;
};

const createMetadata = ({ text }: CreateMetadata) => {
  document.title = text;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    return metaDescription.setAttribute("content", text);
  }
};

export default createMetadata;
