const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Error: keine Stadt eingegeben.')
    }

    const KEY = 'debe16429761e1b23c319aaff573bc6d'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
            appid: KEY, 
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try{
        const data = await rp(options)
        const celsius = (data.main.temp -32) *5/9

        return {
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    }   catch (error) {
        return { 
            weather: null,
            error: error.error.message
        }
    }

    
} 