export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center'
    },
    {
      name: 'name',
      title: 'Firma',
      sortField: 'name'
    },
    {
      name: 'salary',
      title: 'Ocena'
    },
    {
      name: 'salary',
      title: 'Min kwota'
    },
    {
      name: 'salary',
      title: 'Max kwota'
    },
    {
      name: 'salary',
      title: 'Min okres'
    },
    {
      name: 'salary',
      title: 'Max okres'
    },
    {
      name: 'salary',
      title: 'Bik'
    },
    {
      name: 'salary',
      title: 'Darmowa'
    },
    {
      name: 'salary',
      title: 'Wypłata'
    },
    {
      name: 'salary',
      title: 'Adres strony'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
