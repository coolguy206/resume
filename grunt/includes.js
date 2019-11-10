module.exports = {

  options: {
    flatten: true
  },

  include: {

    files: [
      //build toolkit
      {
        cwd: 'html/',
        src: ['*.html'],
        dest: 'html/output/',
      },
    ],

  },


};