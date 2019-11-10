module.exports = {

  options: {
    // sourceMap: true,
    compress: true,
  },

  // MEGA MENU CSS ---------------------------------------------------------------------------
  less: {
    expand: true,
    cwd: 'css/',
    src: '*.less',
    dest: 'css/output',
    ext: '.min.css',
  },


};