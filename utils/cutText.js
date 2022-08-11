module.exports = (content, maxLength) => {
  if (typeof content !== 'string' || content === '') return 'Error';
  if (typeof isNaN(maxLength)) return 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
