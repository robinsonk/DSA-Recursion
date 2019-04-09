function makeTriangle(num) {
    let triangle;
      if (num <= 1) {
          triangle = '*';
      } else {
          triangle = '*' + makeTriangle(num - 1);
      }
      console.log(triangle);
      return triangle;
  }
  
  makeTriangle(5)