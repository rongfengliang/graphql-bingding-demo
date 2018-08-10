
const binding = require("myuser-graphql-binding")
const  post_api = new binding();
console.log(post_api.query.users({}).then((data)=>{
    console.log(data)
}))
