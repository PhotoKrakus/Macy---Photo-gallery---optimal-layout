const msnry = new Macy({
  container: '.my__mace',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    480: 2,
    768: 3,
    1024: 4,
  },
  margin: {
    x: 15,
    y: 15,
  }
})