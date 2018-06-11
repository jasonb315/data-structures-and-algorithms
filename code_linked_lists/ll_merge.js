'use strict';

function llmerge(lla, llb) {

  let zipPointA = lla.head;
  let zipPointB = llb.head;

  while(zipPointA || zipPointB){
    let savedA = zipPointA.next;
    let savedB = zipPointB.next;
    zipPointA.next = zipPointB;
    zipPointB.next = savedA;
    zipPointA = savedA;
    zipPointB = savedB;

  }

  return lla;

}

module.exports = llmerge;
