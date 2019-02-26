var ElementFinder = $('').constructor;

ElementFinder.prototype.scrollClick = function(){
  var elem = this;
  browser.actions().mouseMove(elem).perform();
  return elem.click();
};
