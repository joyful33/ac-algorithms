///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\
// loop,unshift add new item to the arrays beginning 
//shift, unshift, push, pop methods to work with arrays, we want to use them to get the last element in the array and move it to the beginning
function cyclicRotation(arr, rotation){
    
    //Your code here...public int[] rotate(int[] nums, int k) {
     

     )

//Case 1: The rotated array will be assigned to the given array "nums"

cyclicRoatation ([2,10,30,56], 3);
function cyclicRotation(array, rotation) {
    for( i = 0; i < rotation; i++){
      let a =array.pop();
       array.unshift(a);
    }
    return array;
  

    var lastNumber= arr.pop();
    arr.unshift(lastNumber);

    var result=cyclicRotation
    var.log(result);