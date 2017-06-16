# validate-ip-or-domain-name

Function to validate IP address or domain name. It should cover the most common cases. In case that it does not you can learn it few tricks of your own.

### Usage

```
validateIpOrDomain('192.168.1.1'); // true
validateIpOrDomain('122.122.122'); // false
validateIpOrDomain('f.22.22.33'); // false
validateIpOrDomain('foo.bar'); // true
validateIpOrDomain('https://192.368.45.55:889/'); // true
validateIpOrDomain('http://3300.300.30.42:30'); // false
validateIpOrDomain('http://foo.bar'); // true
validateIpOrDomain('http://hello'); // false
validateIpOrDomain('a.b.c.d'); // false
validateIpOrDomain('a.co'); // false
validateIpOrDomain('aaa.co'); // true
validateIpOrDomain('http://aaa.co'); // true
validateIpOrDomain('https://gist.github.com/dperini/729294');
```