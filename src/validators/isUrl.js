/* eslint no-new: "off" */

function isUrl(value) {
  
  if(typeof value === 'undefined' || value === null)
    return null;

  try {
    new URL(value);

    return null;
  }
  catch(error) {
    
    if(!error.name.includes('ERR_INVALID_URL'))
      throw error;

    return {
      it: 'should be url'
    };
  }
}

module.exports = isUrl;