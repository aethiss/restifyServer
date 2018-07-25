var chakram = require('chakram')
var expect = require('chai').expect

const data = {
  email: 'test@test.com',
  user: 'testuser',
  password: 'password1'
}

describe("Server Registration", function () {
  it("Should return valud response name", function () {
    return chakram.post("http://localhost:7000/register", JSON.stringify(data))
      .then(({ body, response }) => {
        console.log(body)
        expect(response.statusCode).to.equal(200)
        expect(body.message.email).to.equal("test@test.com")
      })
  })
})
