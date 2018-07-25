const RegistrationRoute = (server) => {

  server.post('/register', (req, res, next) => {
    const { email, user, password } = JSON.parse(req.body)
    var response = {
      message: {
        email: email,
        user: user,
        password: password
      }
    }
    // TODO: database here !
    res.json(response)
    next()
  })

}

module.exports = RegistrationRoute
