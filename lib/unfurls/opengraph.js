const url = require('url');

const OPEN_GRAPH_HOST = 'opengraph.github.com';

function isOpenGraphLink(link) {
  const parsed = url.parse(link);
  return (parsed.protocol === 'http' || parsed.protocol === 'https') && parsed.host === OPEN_GRAPH_HOST;
}

function generateOpenGraphUnfurl(link) {
  const parsed = url.parse(link);
  // We can take this opportunity to force these unfurls over https
  parsed.protocol = 'https';

  return {
    image_url: url.format(parsed),
  };
}

module.exports = {
  isOpenGraphLink,
  generateOpenGraphUnfurl,
};
