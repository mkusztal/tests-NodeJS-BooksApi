const { expect } = require('chai');
const formatFullname = require('../formatFullname.js');

describe('FormatFullname', () => {
  it('should return an error if "content" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" has less than 2 elements', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });

  it('should return an error if "fullName" has more than 2 elements', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
  });

  it('should return correct formatting of "formatFullname" if proper args', () => {
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
});
