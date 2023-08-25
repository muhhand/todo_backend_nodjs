const Ajv = require("ajv").default;


const schema = {
    "type": "object",
    "properties": {

        "email": {
            "type": "string",
            "pattern": ".+\@.+\..+"
        },
        "password": {
            "type": "string",
            "minLength": 5,
        },

    },
    "required": ["email", 'password'],
};
const ajv = new Ajv();
module.exports = ajv.compile(schema);