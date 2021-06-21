export function replaceURLWithHTMLLinks (text) {
  // eslint-disable-next-line no-useless-escape
  const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  return text?.replace(exp, "<a href='$1' target='_blank'>$1</a>")
}
