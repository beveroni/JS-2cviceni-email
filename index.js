console.log('funguju');

const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGodbye = (name) => {
  return 'S uctivou poklonou' + name;
};

const nonFormalGoodbye = (name) => {
  return 'Tak zdař Bůh' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name);
};
