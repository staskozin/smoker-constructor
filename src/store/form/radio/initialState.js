import React from 'react';

export default {
  thickness: {
    name: 'thickness',
    displayName: 'Толщина стали',
    caption: <>Чем толще стенки, тем долговечнее коптильня.<br />Также, от толщины зависит вид стали и наличие гидрозатвора.</>,
    checked: 0,
    buttons: [
      {
        value: 0,
        text: '1 мм'
      },
      {
        value: 1,
        text: '1,5 мм'
      },
      {
        value: 2,
        text: '2 мм'
      },
      {
        value: 3,
        text: '3 мм'
      }
    ]
  },
  steel: {
    name: 'steel',
    displayName: 'Марка стали',
    caption: 'AISI 430 — обычная, AISI 304 — немагнитная.',
    checked: 1,
    buttons: [
      {
        value: 1,
        text: 'AISI 430'
      },
      {
        value: 0,
        text: 'AISI 304'
      }
    ]
  },
  chips: {
    name: 'chips',
    displayName: '2 кг щепы в подарок',
    caption: '',
    checked: 1092,
    buttons: [
      {
        value: 1092,
        text: 'Ольховая'
      },
      {
        value: 1093,
        text: 'Дубовая'
      }
    ]
  }
}
