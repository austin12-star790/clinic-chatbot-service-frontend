const { OpenAI } = require("openai");

exports.handler = async function (event) {
    const { message } = JSON.parse(event.body);

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ reply: response.choices[0].message.content }),
    };
};