module.exports = {
  siteTitle: 'Serverless Jamstack Bookmark', // <title>
  manifestName: 'Bookmark',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-eventually/`, // This path is subpath of your hosting https://domain/portfolio
  // social
  heading: 'Jamstack Bookmark with Gatsby Netlify Funcitons and FaunaDB',
  subHeading:
    "Bookmark your favourite websites.",
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/anubhavsrivastava',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/onlyanubhav',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/theanubhav',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:anubhav.srivastava00@gmail.com',
    },
  ],
};
