const { response } = require('express');
const https = require('https');
require('dotenv').config();

const COMP1 = process.env.COMP1;
const COMP2 = process.env.COMP2;

getTemp = (req, res) => {
    const { cidade } = req.params;
    url = `${COMP1}${cidade}${COMP2}`;
    const api = url;
    try {
        https.get(api, function (response) {
            if (response.statusCode == 200) {
                console.log(response.statusCode);
                response.on("data", function (data) {
                    const wea = JSON.parse(data);
                    const tempe = Math.round(wea.main.temp);
                    const tempMin = Math.round(wea.main.temp_min);
                    const humid = Math.round(wea.main.humidity);

                    console.log(`Temperatura em ${cidade}: ` + tempe + "°");
                    console.log(`Temperatura mínima ${cidade}: ` + tempMin + "°");
                    console.log("Humidade: " + humid + "%");
                    return res.status.send({
                        Temperatura_atual: tempe + '°',
                        Temperatura_minima: tempMin + '°',
                        Humidade: humid + '%'
                    })
                })
            } else {
                return res.send({
                    Erro: "Hmm, não encontrei esta cidade na lista!"
                })
            }


        });

    } catch (error) {
        res.send("Verificar isto: " + error + res.statusCode);
    }
};


module.exports={
    getTemp
};
    
