const expect = require('chai').expect
const validateIpOrDomain = require('../validateIpOrDomain').validateIpOrDomain

describe('#validateIpOrDomain()', function () {
  it('should return boolean', function () {
    expect(validateIpOrDomain('192.168.1.1')).to.be.a('boolean');
    expect(validateIpOrDomain('a.b.c.d')).to.be.a('boolean');
  });

  it('should return true if valid ip is passed', function() {
    expect(validateIpOrDomain('192.168.1.1')).to.equal(true);
  })

  it('should return false if invalid ip is passed', function() {
    expect(validateIpOrDomain('392.168.1.1')).to.equal(false);
  })

  it('should return true if valid domain name is passed', function() {
    expect(validateIpOrDomain('http://foo.bar')).to.equal(true);
  })

  it('should return false if invalid domain name is passed', function() {
    expect(validateIpOrDomain('http://a.bar')).to.equal(false);
  })

  it('should return true for special case 1', function() {
    expect(validateIpOrDomain('https://gist.github.com/dperini/729294')).to.equal(true);
  })

  it('should return true for special case 2', function() {
    expect(validateIpOrDomain('a.b.c.d')).to.equal(false);
  })
});
