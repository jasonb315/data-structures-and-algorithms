'use strict'

import Node from './kway_node.js';

    class KWayTree {

        constructor(root = null){
            this.root = null;
        }

        appendChild(value){
            const nodeToAppend = new KWayNode(value);
            this.children.push(nodeToAppend);
          }

        breadthFirstTraversal(){
            if(!this.root){
                return null;
            }
            return this.breadthFirstTraversalHelper(this.root);

        }

        breadthFirstTraversalHelper(){
            //const que = que
            //check npm for sue and stack :)
        }


    }

    module.exports = KWayTree;