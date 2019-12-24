const gh = require('gh-pages');

gh.publish('dist/', {
  repo: 'https://github.com/EugeneFenko/ipsec.git',
}, (err) => {
  if (err === undefined) {
    console.log('Success!');
  } else console.log(`Err: ${err}`);
});