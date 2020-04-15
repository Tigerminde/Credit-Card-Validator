import ValidateCardWidget from '../../js/ValidateCardWidget';

test('render self', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new ValidateCardWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(ValidateCardWidget.markup);
});

test('validate input', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new ValidateCardWidget(container);

  widget.bindToDOM();

  const input = container.querySelector('[id=input]');
  input.value = '5404362761210413';
  const submit = container.querySelector('.valid-card');
  submit.submit();

  expect(input.classList.contains('valid')).toBeTruthy();
});
