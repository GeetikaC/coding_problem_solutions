/*
Problem2: In a relay match, a player passes baton to the next player in his team till it reaches to last player who finishes the race.
The method of passing baton is as follows:
1. If height of current baton carrier is less than the next player in sequence, the baton goes to taller player.
2. It takes 1 sec to move from 1 position to next
3. Every pass, time and price is calculted as:
Time: |height of current_player - height of next_player|
Price: Corresponding index value in parallel price array passed as input.
Sum = time+price; 
Output: The least sum of time and price combination is the solution. 
*/

function raceAgainstTime(n, mason_height, heights, prices) {
    var seconds = 0;
    var price = 0;
    var total = 0;
    var last = 0;
    var remaining = 0;
    var count = 1;
    var current_carrier = mason_height;
    for(var i=0; i<n; i++){
        if(current_carrier < heights[i]){
            seconds += Math.abs(heights[i]-current_carrier);
            seconds += count; 
            price += prices[i];
            current_carrier = heights[i];
            count = 0; 
        }
        else{
        	if (i === n-1) {
            	count = 2;
            }
            count++;
        }
        total = seconds + price + count;
    }
    return total;
}


console.log(raceAgainstTime(4, 5, [2,6,2], [2,3,2]));