function shout(str) {
  return str.toUpperCase()
}

function whisper(str) {
  return str.toLowerCase()
}

function logShout(str) {
  shout = str.toUpperCase;
  console.log(`${shout}`)
}