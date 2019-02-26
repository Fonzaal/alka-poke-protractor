var pokedexPage = require('../pages/pokedex.js');
var utils = require('../utils/utils.js');
var page = new pokedexPage();

describe('Pokedex happy path', function(){
  beforeEach(function(){
    browser.sleep(1000);
  });
  afterAll(function(){
    browser.sleep(3000);
  });
  it('Should click on a pokemon', function(){
    page.getUrl();
    page.getFromHome('title').getText().then(function(elem){
      expect(elem).toContain('Pokédex');
    });
    page.selectPokemon(0).click();
  });
  it('Should enter into info tabs', function(){
    page.getFromPokemonInfo('stats-tab').click();
    page.getFromPokemonInfo('evolution-tab').click();
  });
  it('Should click on a pokemon evolution', function(){
    page.getFromPokemonInfo('evolution', 1).click();
  });
  it('Should get a list of pokemon grass types', function(){
    page.getFromPokemonInfo('pokedex-tab').click();

    page.getFromPokemonInfo('type', 0).getText().then(function(elem){
      expect(elem).toContain('Grass');
    });
    page.getFromPokemonInfo('type', 0).click();
  });
  it('Should expect tangela on the list', function(){
    page.getFromHome('pokemon-number', 13).getText().then(function(elem){
      expect(elem).toContain('#114');
    });
  });
});
