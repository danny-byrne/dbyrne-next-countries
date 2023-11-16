// __mocks__/nextImageMock.js

const Image = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default Image;
