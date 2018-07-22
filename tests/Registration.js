var chakram = require('chakram')
var expect = require('chai').expect

describe("Server Registration", function () {
  it("Should return valud response name", function () {
    return chakram.get("http://localhost:7000/hello/enzo")
      .then(({ body, response }) => {
        expect(response.statusCode).to.equal(200)
        expect(body).to.equal("hello enzo")
      })
  })
})
