'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  up: (queryInterface) => {

    const imageUrls = fs.readdirSync(path.resolve(__dirname + '../../../../public/static')).map((url) => `/static/${url}`);
    console.log('============> Image found: ' + imageUrls.join(', '));
    return queryInterface.bulkInsert(
      'images',
      imageUrls.map((url) => ({
        url,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
