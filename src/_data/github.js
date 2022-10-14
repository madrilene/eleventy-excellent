const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function () {
  let url = 'https://api.github.com/users/madrilene/repos';

  // returning promise

  let data = await EleventyFetch(url, {
    duration: '1d',
    type: 'json'
  });

  return data;
};
