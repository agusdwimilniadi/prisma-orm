function tagFunction(array, ...args) {
  console.info('Array :', array);
  console.info('Args :', args);
}

test('Tag function', () => {
  const name = 'Agus';

  tagFunction`Halooo, this is ${name}. How are you?`;
  tagFunction`Nice to meet you ${name}`;
});

test('Tag function with args', () => {
  const name = "Agus';DROP table users;";
  const age = 20;
  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
