const inq = require('inquirer')
const Config = require('myconf')
const config = new Config('.ageconfig')

module.exports = (argv) => {

  function main (data) {
    if (argv.init || !data || !data.birthday) {
      var q = [
        {
          type: 'input',
          name: 'birthday',
          message: 'Your birthday: (like 19940922)',
          validate (val) {
            return val.length === 8
          }
        },
      ]
      inq.prompt(q, a => {
        const birthday = `${a.birthday.substring(0, 4)}-${a.birthday.substring(4, 6)}-${a.birthday.substring(6, 8)}`
        config
          .set('birthday', birthday)
          .then(print)
      })
    } else {
      print(data)
    }
  }

  function print (data) {
    setInterval(() => {
      const now = new Date().getTime()
      const birth = new Date(data.birthday).getTime()
      const age = (now - birth) / 1000 / 86400 / 365
      process.stdout.write('\r\x1b[36m\033[mTime flies, you\'ve been ' + age.toFixed(9).cyan + ' years old')
    }, 100)
  }

  config
    .get()
    .then(main)
    .catch(err => console.log(err))

}
