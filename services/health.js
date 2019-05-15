'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/health', function (request, reply) {
    reply.send({ "status": "OK" })
  })
  next()
}
