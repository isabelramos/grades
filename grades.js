var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoresA = 0;
var scoresB = 0;
var scoresC = 0;
var scoresD = 0;
var scoresF = 0;

for(var g=0; g<scores.length; g++) {
	if (scores[g]>90) {
	scoresA+=1;
	} else if (scores[g]>80) {
	scoresB+=1;
	} else if (scores[g]>70) {
	scoresC+=1;
	} else if (scores[g]>60){
	scoresD+=1;
	} else if (scores[g]>50){
	scoresF+=1;
	}

}
console.log("scores A = ", scoresA);
console.log("scores B = ", scoresB);
console.log("scores C = ", scoresC);
console.log("scores D = ", scoresD);
console.log("scores F = ", scoresF);


var scoresSort = scores.sort (
	function(a,b){
		return a-b;
	}
);

console.log(scoresSort[0]);

console.log(scoresSort[scoresSort.length-1]);