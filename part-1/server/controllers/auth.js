const bcrypt = require('bcryptjs');
const users = []

//let salt = bcrypt.genSaltSync(10);
//let hash = bcrypt.hashSync("B4c0/\/", salt)

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const { username, email, firstName, lastName, password } = req.body
      console.log('Registering User')
      //console.log(req.body)
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);
      let user = {
       username,
       email,
       firstName,
       lastName,
       hash
      }

      console.log(user)
      users.push(user)
      res.status(200).send(user)
    }
}