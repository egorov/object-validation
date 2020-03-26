function url(value) {
  
  if(typeof value === 'undefined' || value === null)
    return null;

  try {
    new URL(value);

    return null;
  }
  catch(error) {

    if(!error.message.includes('Invalid URL'))
      throw error;

    return {
      type: 'url'
    };
  }
}

module.exports = url;