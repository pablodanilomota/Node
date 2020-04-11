process.stdout.write('Do you like the course? ')
process.stdin.on('data', function(data) {
  process.stdout.write(`Your answer was ${data.toString()}Thank You!\n`)
  process.exit()
})