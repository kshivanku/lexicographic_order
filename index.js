//ALGO HERE
//https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

var vals = [0, 1, 2];

function setup(){
  createCanvas(400, 300);
}

function draw(){
  console.log(vals);
  background(0);

  //STEP 1
  var largestI = -1;
  for (var i = 0 ; i < vals.length - 1 ; i++){
    if(vals[i] < vals[i + 1]){
      largestI = i;
    }
  }
  if(largestI == -1) {
    console.log("finished");
    noLoop();
  }

  //STEP2
  var largestJ = largestI;
  for(var j = largestI + 1 ; j < vals.length ; j++){
    if(vals[largestI] < vals[j]){
      largestJ = j;
    }
  }

  //STEP3
  swap(vals, largestI, largestJ);

  //STEP4
  var subVals = vals.splice(largestI + 1);
  var reverse_subVals = subVals.reverse();
  vals = vals.concat(reverse_subVals);
}

function swap(a, i, j){
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
