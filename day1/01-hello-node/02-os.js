const os = require('node:os');

console.log('Operating system version:', os.version());
console.log('Uptime:', os.uptime() / 3600, 'hours');
console.log('User info:', os.userInfo());
