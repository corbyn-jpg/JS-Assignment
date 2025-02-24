/* a)
async/await and Promise.all() can be combined to optimize multiple asynchronous operations by running them concurrently. Using them together simplifies the code and makes it more readable. Error handling is achieved using try/catch, ensuring proper handling of any failures in the code.
*/

async function getWeatherForCities(citiesArray) {
    async function fetchWeather(city) {
  
      // Simulate success or failure randomly
      if (Math.random() > 0.2) {
        return { city, weather: `Sunny in ${city}` };
      } else {
        throw new Error(`Data unavailable for ${city}`);
      }
    }
  
    try {
      const weatherPromises = citiesArray.map(city =>
        fetchWeather(city).catch(error => ({ city, error: error.message }))
      );
  
      const weatherReports = await Promise.all(weatherPromises);
      return weatherReports;
    } catch (error) {
      console.error("Unexpected error:", error);
      throw error;
    }
  }