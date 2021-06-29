const size = {
  mobileS: '375px',
  mobileM: '425px',
  mobileL: '768px',
  tablet: '1024px',
  laptop: '1440px',
  desktop: '1920px',
};

export default {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
