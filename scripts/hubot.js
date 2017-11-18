var parser = require('../parser')

module.exports = robot => {
  robot.hear(/oi/i, res => {
    res.send('Olar')
  })
  robot.hear(/wit/i, async res => {
    const parsedMessage = await parser(
      'Qual candidato foi o mais votado no RS?'
    )
    res.send(JSON.stringify(parsedMessage))
  })
}
