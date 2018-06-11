'use strict';

class Queue {
  constructor(){
    this.old = 1;
    this.new = 1;
    this.data = {};
  }

  enqueue(data){
    this.data[this.new] = data;
    this.new++;
  }

  dequeueue() {
    let old = this.old;
    let deletedData = this.data[old];

    delete this.data[old];
    this.old++;
    return deletedData;
  }
}

module.exports = Queue;
