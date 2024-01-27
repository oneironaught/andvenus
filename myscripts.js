$(document).ready(it('should toggle the class "glyphicon-triangle-right" to "glyphicon-triangle-left" when the menu button is clicked', function() {
  // Arrange
  const menuButton = document.querySelector('.menu-big');
  const icon = menuButton.querySelector('span');

  // Act
  menuButton.click();

  // Assert
  expect(icon.className).to.equal('glyphicon glyphicon-triangle-left');
}))