
const myToken = '2OHPMQAPHJJPBATY6ECJ';

const EventBrite = {

  search(term, location, date, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/http://www.eventbriteapi.com/v3/events/search?token=2OHPMQAPHJJPBATY6ECJ&q=${term}&location.address=${location}&start_date.keyword=${date}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${myToken}`,
        Origin: `http://localhost:3000`,
      }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
      if (jsonResponse.events) {
        return jsonResponse.events.map(event => ({
          id: event.id,
          logo: event.logo.url,
          date: event.start.local,
          name: event.name.text,
          url: event.url
        }));
      }
    });

  }

}

export default EventBrite;
