const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const { Binding } = require('graphql-binding')
const { HttpLink } = require('apollo-link-http')
const { makeRemoteExecutableSchema } = require('graphql-tools')

const link = new HttpLink({ uri: 'http://localhost:4466', fetch })
const typeDefs = fs.readFileSync(
  path.join(__dirname, './schemas/datamodel.graphql'),
  'utf-8',
)

const schema = makeRemoteExecutableSchema({ link, schema: typeDefs })

class MyUserBinding extends Binding {

  constructor() {
    super({ schema })
  }

}

module.exports = MyUserBinding