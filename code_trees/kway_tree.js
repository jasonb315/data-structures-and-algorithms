'use strict'

const Node = require ('./kway_node.js');

    class KWayTree {

        constructor(root = null){
            this.root = null;
        }

        proGen(genVal){
            const node = new Node(genVal);
            this.root = node;
        }

        reGen(stemFrom, genVal){
           
            //new node.
            const newNode = new Node(genVal);

            // starting point.
            let currentNode = this.root;

            //when match is found for stemFrom, grow there. WORKS!
            if (currentNode.value === stemFrom){
                currentNode.children.push(newNode);
                return;
            }

            else {
              
                let _walk = (node, stemFrom, genVal) => {

                    for (let i = 0; i < node.children.length; i++) { 
                        console.log(i, node.children[i]);
                        _walk(node.children[i], stemFrom, genVal);
                    }
                    if (node.value === stemFrom){

                        console.log('match found');
                        console.log(node.children)
                        node.children.push(new Node(genVal));
                        console.log(node.children);
                    }
                }
                
                _walk(this.root, stemFrom, genVal);
            }

        }
            
        // travelTo(targetVal){

        //     // console.log('travelTo currentNode: ' + currentNode.children);//315 root node w/ children

        //     let _walk = (node) => {

        //         for (let i = 0; i < node.children.length; i++) { 
        //             console.log(i, node.children[i]);
        //             if (node.children){_walk(node.children[i]); }
        //         }
        //         if (node.value === targetVal){
        //             console.log('match found');
                    
        //             console.log(node.children)
        //             node.children.push(new Node('x'));
        //             node.children.push(new Node('y'));
        //             console.log('node ' + node);
        //             console.log(node.children);
        //         }
        //     }
            
        //     _walk(this.root);


          

            //     //do something in end

            //   };

            // _walk(this.root);//ini call

            //   return results;


        // }
        
  
            // //if proGen not called, make reGen root.
            // if (currentNode === null){
            //     this.root = newNode;
            // }//

            // //move down tree to find specified stem to leaf.
            // if(currentNode.value === stemFrom){

            // }
            
            // this.children.push(node);
            
          

        // breadthFirstTraversal(){
        //     if(!this.root){
        //         return null;
        //     }
        //     return this.breadthFirstTraversalHelper(this.root);

        // }

        // breadthFirstTraversalHelper(){
        //     //const que = que
        //     //check npm for sue and stack :)
        // }


    }

    module.exports = KWayTree;



//     Latin prefix	Basic meaning	Example words
// co-	together	coauthor, coedit, coheir
// de-	away, off; generally indicates reversal or removal in English	deactivate, debone, defrost, decompress, deplane
// dis-	not, not any	disbelief, discomfort, discredit, disrepair, disrespect
// inter-	between, among	international, interfaith, intertwine, intercellular, interject
// non-	not	nonessential, nonmetallic, nonresident, nonviolence, nonskid, nonstop
// post-	after	postdate, postwar, postnasal, postnatal
// pre-	before	preconceive, preexist, premeditate, predispose, prepossess, prepay
// re-	again; back, backward	rearrange, rebuild, recall, remake, rerun, rewrite
// sub-	under	submarine, subsoil, subway, subhuman, substandard
// trans-	across, beyond, through	transatlantic, transpolar