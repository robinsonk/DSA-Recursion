function countingSheep(num) {
    if (num === 0) {
      console.log('All sheep have jumped the fence');
    } else {
      console.log(`${num}: Another sheep jumped over`)
      num--;
  
      countingSheep(num);
    }
  
  }
  
  countingSheep(4);