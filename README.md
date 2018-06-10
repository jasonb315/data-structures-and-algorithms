<a id="contents"></a>
# Data Structures and Algorithms

[![Build Status](https://travis-ci.com/jasonb315/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/jasonb315/data-structures-and-algorithms)

*Jason Burns, Code Fellows seattle401d24*

### Table of contents

  * [1. array_reverse](#array_reverse)
  * [2. array_shift](#array_shift)
  * [3. array_binary_search](#array_binary_search)
  * [4. array_adjacent_product](#array_adjacent_product)
  * [5. matrix_rotation](#matrix_rotation)
  * [6. ll_insertions](#ll_insertions)
  * [7. ll_kth_from_end](#ll_kth_from_end)
  * [8. ll_merge](#ll_merge)
  * [9. ll_detect_loop](#ll_detect_loop)
  * [10. detect_palendrome](#detect_palendrome)
  * [11. queue_with_stacks](#queue_with_stacks)
  * [12. fifo_animal_shelter](#fifo_animal_shelter)
  * [13. multi-bracket-validation](#multi-bracket-validation)
  * [14. towers-of-hanoi](#towers-of-hanoi)
  * [15. get_max](#get_max)
  * [16. fizz_buzz_tree](#fizz_buzz_tree)
  * [17. breadth_first_traversal](#breadth_first_traversal)
  * [18. find-maximum-value](#find-maximum-value)
  * [19. estimates_of_population](#estimates_of_population)

  <!-- * [XX NAME](#NAME) -->

<a id="array_reverse"></a>
## 1. array_reverse

#### Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return the provided array argument with elements in reversed order.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/reverseArray.jpg)

[:top: TOP](#contents)


<a id="array_shift"></a>
## 2. array_shift

#### Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/arrayShift.jpg)

[:top: TOP](#contents)


<a id="array_binary_search"></a>
## 3. array_binary_search

#### Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/ArrayBinarySearch.jpg)

[:top: TOP](#contents)

<a id="array_adjacent_product"></a>
## array_adjacent_product

#### 4. Challenge
Write a function called LargestProduct which takes in a 2D array, of arbitrary size.
Without utilizing any of the built-in methods available to your language, return the largest product of 2 adjacent values within the 2D array.
Adjacent values might be horizontally, vertically, or diagonally connected.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/largestProduct1.jpg)
![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/largestProduct2.jpg)

[:top: TOP](#contents)

<a id="matrix_rotation"></a>
## 5. matrix_rotation

#### Challenge
Ask the candidate to write a function to rotate a 3x3 matrix (an array of integers), by 90 degrees clockwise.
Avoid utilizing any of the built-in methods available to your language.
Don’t let the candidate get scared by the term “matrix”… It’s just an array of arrays.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/largestProduct1.jpg)

[:top: TOP](#contents)

<a id="ll_insertions"></a>
## 6. ll_insertions

#### Challenge
.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/ll_insertions.jpg)

[:top: TOP](#contents)

<a id="ll_kth_from_end"></a>
## 7. ll_kth_from_end

#### Challenge
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges. ​

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/llKthFromEnd.jpg)

[:top: TOP](#contents)


<a id="ll_merge"></a>
## 8. ll_merge

#### Challenge
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the single list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/ll_merge.jpg)

[:top: TOP](#contents)


<a id="ll_detect_loop"></a>
## 9. ll_detect_loop

#### Challenge
Write a method for the Linked List class called hasLoop which takes no arguments. Return a boolean that indicates whether or not a circular reference or loop is present in the linked list. Your implementation must not use any additional memory or modify the nodes of the linked list. You have access to the Node class and all the standard properties on the Linked List class as well as the methods created in previous challenges.
Note: Length or Size are *not* included in standard properties for a LL.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/ll_detect_loop.jpg)

[:top: TOP](#contents)


<a id="detect_palendrome"></a>
## 10. detect_palendrome

#### Challenge
Ask the candidate to write a function to validate whether or not a Linked list is palindrome
Help the candidate understand the definition of a Palindrome if he/she is unsure of it.
A palindrome is a word, phrase, number, or sequence of nodes which reads the same backward as forward.
Avoid utilizing any of the built-in methods available in your language.
This problem can be solved using different approaches:
Using a helper data structure (Array or Linked List) to keep track of the nodes.
This method takes O(n) and uses O(n) extra space.
Reversing the Linked List, and checking for equality of the reversed part.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/detectPalendrome.jpg)

[:top: TOP](#contents)


<a id="queue_with_stacks"></a>
## 11. queue_with_stacks

#### Challenge
Implement the following methods for the Queue class:

enqueue(value) which inserts value into the Queue using a first-in, first-out approach.
dequeue() which extracts a value from the Queue using a first-in, first-out approach.
You have access to 2 Stack instances with push and pop methods.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/queue_with_stacks2.jpg)

[:top: TOP](#contents)

<a id="fifo_animal_shelter"></a>
## 12. fifo_animal_shelter

#### Challenge
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref, a string, is ‘cat’ return the longest-waiting cat. If pref is ‘dog’, return the longest-waiting dog. For anything else, return either a cat or a dog.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/fifo_animal_shelter.jpg)

[:top: TOP](#contents)



<a id="multi-bracket-validation"></a>
## 13. multi-bracket-validation

#### Challenge
On your main file, create…
JavaScript: a function called multiBracketValidation(input)
Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/multi-bracket-validation.jpg)

[:top: TOP](#contents)

<a id="towers-of-hanoi"></a>
## 14. towers-of-hanoi

#### Challenge
The Towers of Hanoi is a mathematical puzzle where you have 3 towers and N disks of different sizes.
The puzzle starts with the disks sorted (i.e. smaller disks sits on top of larger disks) on the left-most tower, and the objective of the puzzle is to move the disks to the right-most tower with the following restrictions:
Only one disk can be moved at a given time.
A disk is moved from the top of a tower to the top of another tower.
A disk can’t be placed on top of a smaller disk.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/towers_of_hanoi.jpg)

[:top: TOP](#contents)


<a id="get_max"></a>
## 15. get_max

#### Challenge
Ask the candidate to write a ‘Max Stack’ which is defined as a Stack with an additional getMax() member function which returns the ‘biggest’ element in the Stack.
The candidate can assume that only numeric values will be stored in the Stack, but she/he has to ask before the interviewer can state this.
The internal memory of the Stack can be approached in different ways.
Using a Linked List
This approach uses O(n) space.
Using an Array
This approach can either use O(n) space or O(c) where c is the size of the array in static-size arrays.
If your language doesn’t support dynamic arrays,Inquire about the candidate’s decision of using a limited amount of storage for the Stack.
Using a Node class and manually creating connections by maintaining a reference to the ‘top’ of the stack.
This approach uses O(n) space.
This ‘getMax()’ member function can be approached in several ways as well:
Modifying the traditional push and pop methods to keep track on the maximum value so far.
This solution takes O(1) time to both maintain and retrieve the maximum value.
Traversing the entire Stack to calculate the maximum value.
This solution takes O(n) time.
If the candidate is considering this approach, comment on the fact that there might be a more efficient way to calculate the maximum value, but avoid providing specific details.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/getMax.jpg)

[:top: TOP](#contents)


<a id="fizz_buzz_tree"></a>
## 16. fizz_buzz_tree

#### Challenge
Write a function called FizzBuzzTree which takes a tree as an argument.
Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes respectively. Return the tree with it’s news values.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/fizzbuzztree.jpg)

[:top: TOP](#contents)

<a id="breadth_first_traversal"></a>
## 17. breadth_first_traversal

#### Challenge
Write a function called breadthFirstTraversal which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/breadthFirstTraversal.jpg)

[:top: TOP](#contents)


<a id="find-maximum-value"></a>
## 18. find-maximum-value

#### Challenge
Write a function called find-maximum-value which takes binary tree as its only imput. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/find-max-value-binary-tree.jpg)

[:top: TOP](#contents)


<a id="estimates_of_population"></a>
## 19. estimates_of_population

#### Challenge
You are working on a team producing estimates of population for some creature, given a complex set of inputs.
Your team keeps records of the simulation runs you've done and their results.

For each new simulation, you are asked to find the previous run with a value nearest to the current result so that you can compare the inputs used.

Write an algorithm that will return this data as quickly as possible.

#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/estimates_of_population.jpg)

[:top: TOP](#contents)

<!--
<a id="NAME"></a>
## X. NAME

#### Challenge


#### White Board

![title](https://github.com/jasonb315/data-structures-and-algorithms/blob/master/assets/NAME.jpg)

[:top: TOP](#contents)
-->
