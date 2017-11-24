export default {
  server: {
    cors: {
      //origin: 'https://bbf-bioblitz.herokuapp.com',
      //origin: 'http://localhost:4200/'
      origin: '*',
      enabled: true,

      headers: [
        'Accept',
        'Content-Type'
      ],

      methods: [
        'GET',
        'POST',
        'PATCH',
        'DELETE',
        'HEAD',
        'OPTIONS'
      ]
    }
  },

  logging: {
    level: 'DEBUG',
    format: 'text',
    enabled: true,

    filter: {
      params: []
    }
  }
};
