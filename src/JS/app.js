function testJs(event) {
  if (event.key === 't') {
    const bodyElement = document.querySelector('body');
    const messageElement = document.createElement('span');
    messageElement.textContent =
      'I am connected and working Ryan. You may proceed';
    bodyElement.appendChild(messageElement);
  }
}

document.addEventListener('keydown', testJs);