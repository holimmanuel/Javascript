class Draw {
  GambarKotak(h) {
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < h; j++) {
        process.stdout.write('*');
      }
      console.log(' ');
    }
    console.log('\n');
  }
  GambarSegitiga(h) {
    for (let i = 0; i < h; i++) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write('*');
      }
      console.log(' ');
    }
    console.log('\n');
  }

  GambarSegitigaTerbalik(h) {
    for (let i = 0; i < h; i++) {
      for (let j = h; j > i; j--) {
        process.stdout.write('*');
      }
      console.log(' ');
    }
    console.log('\n');
  }
  GambarSelangSeling(h) {
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < h; j++) {
        if ((i % 2 == 0 && j % 2 == 1) || (i % 2 == 1 && j % 2 == 0)) {
          process.stdout.write('*');
        } else {
          process.stdout.write('!');
        }
      }
      console.log(' ');
    }
    console.log('\n');
  }
}

let kotak = new Draw();
kotak.GambarKotak(7);

let Segitiga = new Draw();
Segitiga.GambarSegitiga(7);

let SegitigaTerbalik = new Draw();
SegitigaTerbalik.GambarSegitigaTerbalik(7);

let SelangSeling = new Draw();
Selangseling.GambarSelangseling(7);
