
function validateIpOrDomain(address) {
  if (address.indexOf('h') !== -1) {
    address = address.split(':')[1].substring(2);
    // check forward slash
    var slash = address.indexOf('/');
    if (slash !== -1) address = address.substring(0, slash);
    if (/^[a-zA-Z.]+$/g.test(address)) {
      if (isValidName(address)) {
        console.log(address + ' => valid name');
        return true;
      }
      console.log(address + ' => not valid name');
      return false;
    } 
  }
  // only nums assume it's an ip address
  if (/^[0-9.]+$/.test(address)) {
    if (isValidIp(address)) {
      console.log(address + ' => valid ip');
      return true;
    }
    console.log(address + ' => not valid ip');
    return false;
  }
  // only nums assume it's an ip address
  if (/^[a-z.]+$/.test(address)) {
    if (isValidName(address)) {
      console.log(address + ' => valid name');
      return true;
    }
    console.log(address + ' => not valid name');
    return false;
  }
  // everything else
  console.log(address + ' : bad input');
  return false;
}

function isValidIp(address) {
  return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(address);
}

function isValidName(name) {
  return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(name);
}

exports.validateIpOrDomain = validateIpOrDomain;
