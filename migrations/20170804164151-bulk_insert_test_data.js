'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('category', [
      {
        name: 'City',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Province',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'State',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'District',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Region',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Outlying Area',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    queryInterface.bulkInsert('country',[
      {
        name: 'Guatemala' ,
        alpha2Code: 'GT' ,
        alpha3Code: 'GTM' ,
        isoCode: 'ISO 3166-2:GT',
        linkToIsoCode: 'https://en.wikipedia.org/wiki/ISO_3166-2:GT' ,
        independent: 1,
        flag: null ,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'El Salvador' ,
        alpha2Code: 'SV' ,
        alpha3Code: 'SVL' ,
        isoCode: 'ISO 3166-2:SV',
        linkToIsoCode: 'https://en.wikipedia.org/wiki/ISO_3166-2:SV' ,
        independent: 1,
        flag: null ,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Honduras' ,
        alpha2Code: 'HN' ,
        alpha3Code: 'HND' ,
        isoCode: 'ISO 3166-2:HN',
        linkToIsoCode: 'https://en.wikipedia.org/wiki/ISO_3166-2:HN' ,
        independent: 1,
        flag: null ,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nicaragua' ,
        alpha2Code: 'NI' ,
        alpha3Code: 'NIC' ,
        isoCode: 'ISO 3166-2:NI',
        linkToIsoCode: 'https://en.wikipedia.org/wiki/ISO_3166-2:NI' ,
        independent: 1,
        flag: null ,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Costa Rica' ,
        alpha2Code: 'CR' ,
        alpha3Code: 'CRI' ,
        isoCode: 'ISO 3166-2:CR',
        linkToIsoCode: 'https://en.wikipedia.org/wiki/ISO_3166-2:CR' ,
        independent: 1,
        flag: null ,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Panama' ,
        alpha2Code: 'PA' ,
        alpha3Code: 'PAN' ,
        isoCode: 'ISO 3166-2:PN',
        linkToIsoCode: 'https://en.wikipedia.org/wiki/ISO_3166-2:PN' ,
        independent: 1,
        flag: null ,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

    queryInterface.bulkInsert('subDivision',[
      {
        name: 'Alta Verapaz' ,
        code: 'GT-AV' ,
        alpha2Code: null,
        isoCode: null,
        linkToIsoCode: null,
        flag:null ,
        status: 1,
        CategoryId: 3 ,
        CountryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Escuintla' ,
        code: 'GT-ES' ,
        alpha2Code: null,
        isoCode: null,
        linkToIsoCode: null,
        flag:null ,
        status: 1,
        CategoryId: 3 ,
        CountryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guatemala' ,
        code: 'GT-GU' ,
        alpha2Code: null,
        isoCode: null,
        linkToIsoCode: null,
        flag:null ,
        status: 1,
        CategoryId: 3 ,
        CountryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);


  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
