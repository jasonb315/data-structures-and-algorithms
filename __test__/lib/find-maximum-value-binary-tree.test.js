const BinaryTree = require('../../lib/find-maximum-value-binary-tree.js');

describe('binaryTree', () => {

  //global
  let tree02 = new BinaryTree();
  tree02.append(50);//I AM ROOT
  let tree01 = new BinaryTree();
  tree01.append(50);
  tree01.append(60);
  tree01.append(70);

  it('append', () => {
    //internam vars, if needed
    expect( findMaximumValueBinaryTree(tree) ).toEqual();
  });

  it('preOrder', () => {
    expect( FX() ).toEqual();
  });

  it('postOrder', () => {
    expect( FX() ).toEqual();
  });

  it('inOrder', () => {
    expect( FX() ).toEqual();
  });

});
