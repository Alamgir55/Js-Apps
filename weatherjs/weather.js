class Weather{
    constructor(city, state){
        this.apikey = '97d5250d4f5e468795250d4f5ed687a6';
        this.city = city;
        this.state = state;
    }
   async getWeather(){
        const response = await fetch(`https://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}