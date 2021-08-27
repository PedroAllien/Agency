const scrollReveal =  ScrollReveal({ origin: 'top', distance: '30px', duration: 700, reset: true, delay: 375});

scrollReveal.reveal(`
    .title-container,
    .services-container
`, { interval: 100 });