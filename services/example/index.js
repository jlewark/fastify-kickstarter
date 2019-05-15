'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/example',
    schema: {
      response: 200 {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }, async function (request, reply) {
    return {hello: 'world'}
  })

  fastify.route({
    method: 'POST',
    url: '/example',
    schema: {
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      },
      response: 200 {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }, async function (request, reply) {
    return {hello: 'world'}
  })

}
