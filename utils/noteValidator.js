const Ajv = require("ajv").default;


const schema = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
        },
        "content": {
            "type": "string",
        },
        "userid": {
            "type": "string",
        },

    },
    "required": ["title", "content", "userid"],
};
const ajv = new Ajv();
module.exports = ajv.compile(schema);