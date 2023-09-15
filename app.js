const https = require('https');
const PORT = process.env.PORT || 3000;
function fetDef(term) {
    try {
        const request = https.get{
            'https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=152ee421-77f2-4bb7-bd3c-6f1027083273'
            (response) => {
                let body = "";
                response.on("data", (data) => {
                    body += data.toString();
                });
                response.on('end', () => {
                    const definition = JSON.parse(body);
                    console.log(definition[0].shortdef);
                })
            }

        }
        request.on('error', (error) => console.error(error.message));
    } catch (error) {
        console.error(error.message);
    }
};

const query = process.argv.slice(2);
query.forEach(getDef);
