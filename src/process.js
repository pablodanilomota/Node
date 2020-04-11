console.log(process.argv)

function isParam(param) {
  return process.argv.indexOf(param) !== -1
}

isParam('--producao') ? console.log('true') : console.log('Corre negada!')