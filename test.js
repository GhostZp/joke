'use strict';

async function joke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    const vastausdata = await response.json();

    console.log(vastausdata);
    console.log(vastausdata.value);
  } catch (error) {
    console.error('Virhe:', error);
  }
}

joke();
