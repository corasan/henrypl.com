export default {
  projects: [
    {
      name: 'Stocket',
      description: 'Stock Market simulator built with React Native and IEX Cloud API.',
      urls: [
        {
          title: 'Website',
          url: 'https://www.stocketapp.com/',
        },
        {
          title: 'App Store',
          url: 'https://apps.apple.com/us/app/stocket-app/id1493392383',
        },
      ],
      image: `${process.env.PUBLIC_URL}/assets/stocket.png`,
      tags: ['React Native', 'IEX Cloud', 'iOS', 'Ruby', 'GraphQL', 'Firebase'],
    },
    {
      name: 'E-Commerce App',
      description: 'E-commerce simple app to learn SwiftUI.',
      urls: [
        {
          title: 'Github',
          url: 'https://github.com/corasan/ecommerce-swiftui',
        },
      ],
      image: `${process.env.PUBLIC_URL}/assets/ecommerce.png`,
      tags: ['SwiftUI', 'iOS'],
    },
    {
      name: 'CloudMate',
      description: 'Simple open-source weather app built with React Native and the Open Weather Map API.',
      urls: [
        {
          title: 'Github',
          url: 'https://github.com/corasan/weather-app',
        },
        {
          title: 'App Store',
          url: 'https://apps.apple.com/us/app/cloudmate/id1470349168',
        },
      ],
      image: `${process.env.PUBLIC_URL}/assets/cloudmate.png`,
      tags: ['React Native', 'iOS', 'Open Weather Map'],
    },
  ],
}
