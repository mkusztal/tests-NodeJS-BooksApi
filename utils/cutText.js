module.exports = (content, maxLength) => {
  if (typeof content !== 'string' || content === '') return 'Error';
  if (content.length <= maxLength) return content;
  if (content.length < 1) return 'Error';
  if (isNaN(maxLength)) return 'Error';
  if (maxLength <= 0) return 'Error';
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
