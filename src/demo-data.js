const columns = [{
    key: 'id',
    label: '#',
  }, {
    key: 'name',
    label: 'Name',
  }, {
    key: 'email',
    label: 'Email',
  },
];

const rows = [];

const nextName = (i) => {
  if (i % 7 === 0) {
    return `Jack #${i}`;
  }
  if (i % 5 === 0) {
    return `Jon #${i}`;
  }
  if (i % 3 === 0) {
    return `Jill #${i}`;
  }
  return `Jane #${i}`;
}

const nextEmail = (i) => {
  if (i % 7 === 0) {
    return 'jack@example.com';
  }
  if (i % 5 === 0) {
    return 'jon@example.com';
  }
  if (i % 3 === 0) {
    return 'jill@example.com';
  }
  return 'jane@example.com';
}

let i = 1;

while (i <= 1000) {
  rows.push({
    id: i,
    name: nextName(i),
    email: nextEmail(i),
    onClickHandler: (e) => { console.log(e.target); },
    isActive: i === 3,
  });
  i++;
}

export default {
  columns,
  rows,
};
