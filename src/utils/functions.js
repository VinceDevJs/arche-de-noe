const convertToSlug = function (text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

module.exports.convertToSlug = convertToSlug
