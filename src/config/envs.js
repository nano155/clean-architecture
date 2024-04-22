import 'dotenv/config'
import pkg from 'env-var'

const {get} = pkg

export const envs = {
    PORT : get('PORT').required().asPortNumber(),
    MONGO_URL : get('MONGO_URL').required().asString(),
    PRIVATE_KEY :get('PRIVATE_KEY').required().asString()
}