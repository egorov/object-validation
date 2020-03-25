function isUrl(value) {
  
  if(typeof value === 'undefined' || value === null)
    return null;

  try {
    new URL(value);

    return null;
  }
  catch(error) {
    
    if(!error.code.includes('ERR_INVALID_URL'))
      throw error;

    return {
      it: 'should be url'
    };
  }
}

module.exports = isUrl;