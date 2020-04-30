(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split('|'); // type in the pipe | to get rid of it and be replaced with comma

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newPlanets = planetsArray.join('\n');
    console.log(newPlanets);


    var planetsList = "<ul>";
        planetsArray.forEach(function(planet) {
            planetsList += "<li>" + planet + "</li>";
        });
    planetsList += "</ul>";


    document.getElementById('planets-list').innerHTML = planetsList;
})();
