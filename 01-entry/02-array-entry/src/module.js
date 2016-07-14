module.exports = function(msg, error) {
  if ( error === true ) {
    console.error(msg);
  } else {
    console.log(msg);
  }
}
