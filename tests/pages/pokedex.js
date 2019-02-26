var Pokedex = function(){
  var url = 'http://juandelgadillo.github.io/angular2-pokedex/#/pokedex';
  var mainTitle = element(by.css('.page-header h1'));
  var pokemonNumbers = element.all(by.css('pokemon-name span'));
  var pokemonInfoTabs = element.all(by.css('.nav-tabs li'));
  var pokemonEvolutions = element.all(by.css('pokemon-evolution div a'));
  var pokemonTypes = element.all(by.css('pokemon-type a'));
  this.getUrl = function (){
    browser.get(url);
  };
  this.getFromHome = function(elem, index){
    switch (elem) {
      case 'title':
        return mainTitle;
      case 'pokemon-number':
        return pokemonNumbers.get(index);
    }
  };
  this.selectPokemon = function(id){
    return element.all(by.css('.pokemon .panel-body')).get(id);
  }

  this.getFromPokemonInfo = function(elem, index){
    switch (elem) {
      case 'pokedex-tab':
        return pokemonInfoTabs.get(0);
      case 'stats-tab':
        return pokemonInfoTabs.get(1);
      case 'evolution-tab':
        return pokemonInfoTabs.get(2);
      case 'evolution':
        return pokemonEvolutions.get(index);
      case 'type':
        return pokemonTypes.get(index);
    }
  }
};

module.exports = Pokedex;
