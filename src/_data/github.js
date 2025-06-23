import EleventyFetch from '@11ty/eleventy-fetch';

export default async function () {
  let url = 'https://api.github.com/users/jaycuthrell/repos';

  // returning promise

  let data = await EleventyFetch(url, {
    duration: '1d',
    type: 'json'
  });

  return data;
}
