// question 1
function is_array(input){
  return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


// question 2

function array_Clone(input){
  return input.slice(1,3)
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// question 3

function first(x,n){
  if (n==null){
      return x[0];
  }if(n<0){
      return [];
  }
  return x.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


// question 4

myColor = ["Red", "Green", "White", "Black"];
var ans=myColor.join();
console.log(ans);
var anss=myColor.join(",");
console.log(anss);
var ansss= myColor.join("+");
console.log(ansss);

// question 5

var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var n=arr.length;
var c=0;
var maxc=0;
var ans='';
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        if (arr[i]==arr[j]){
            c+=1;
            if (c>maxc){
                maxc=c;
                ans=arr[i];
            }
        }
    }
    c=0;
}
console.log(ans+" ( "+maxc+" times)");