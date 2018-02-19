/* Problem1: In the original version of Russian Roulette, there are active and inactive zones a contestant has to pass through to win, and also a trap door.

You are playing a revised version of the game, where, you have to unlock all doors in a given setting, in a given fashion, to enter the playig area.

    Initially, any door is either locked or unlocked.
    If a door is locked and you unlock it, then
        if the next consecutive door is locked, it will automatically get unlocked.
        if the next consecutive door is already unlocked, nothing will happen.
        there will be no effect on any following door. 

For example, if there are doors as shown below, where denotes an unlocked door, and denotes a locked door, a minimum of operations, will be required to unlock all doors.

Note: You are allowed to unlock the doors in any order you wish.

Complete the function revisedRussianRoulette that takes an integer array denoting status of each door in the array, and return an integer array denoting the minimum and maximum number of unlock operations needed to unlock all the doors.

Input Format:

The first line contains a single integer , denoting the total number of doors.

The next line contains space separated integers, "1" denotes a locked door and "0" denotes an unlocked door.


Output Format:

Print two integers separated by one space, denoting the minimum and maximum number of unlock operations needed respectively.

Sample Input:

10
0 1 1 0 1 1 1 1 0 0

Sample Output:

3 6

Explanation:
    Step1: if door is 1(locked), you open it and the next door also opens if its a 1 too
    Step2: if door is 0(unlocked), you move to next door to check if its 1, if yes, repeat step 1. 
Input: 
    line1: Number of doors
    line2: door values
Output:
    (minimum number of doors to be unlocked to unlock ALL locked doors) SPACE (maximum number of doors to be unlocked to unlock ALL locked doors)


*/

function revisedRussianRoulette(doors) {
    var i=0;
    var count=0;
    var lockedCount=0;
    doors.find(function(value){
         if(value === "1")
            lockedCount++;
    });
    while (i<doors.length){
        if(doors[i] === "0"){
            i++;
        }
        else if(doors[i] === "1"){
            if (i === doors.length-1) {
                count++;
                break;
            }
            else{
                count++;
                doors[i] = 0;
                doors[i+1] = 0;
                i = i+2;
            }
        }
    }
    return [count, lockedCount];
}

doors = "0 1 1 0 1 1 1 1 0 0";

doors = doors.split(" ");
var result = revisedRussianRoulette(doors);
console.log(result.join(" "));