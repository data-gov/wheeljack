module.exports = (robot) => {
  robot.hear(/oi/i, (res) => {
    res.send('Olar')
  })
}
