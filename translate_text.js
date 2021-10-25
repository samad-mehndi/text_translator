const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

//my credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {
    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error){
        console.log('Error in detecting --> ${error}');
        return 0;
    }
}

// detectLanguage('sono un ragazzo').then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(error);
// });

const translateText = async (text, targetLanguage) => {
    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error){
        console.log('Error in detecting --> ${error}');
        return 0;
    }
};

// translateText('sono un ragazzo', 'en')
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })