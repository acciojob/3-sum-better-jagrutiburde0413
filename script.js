function threeSum(arr, target) {
	let min=Number.MAX_VALUE;
var ans=0;
	for(var i=0;i<arr.length;i++){
		for( var j=i+1;j<arr.length;j++){
			for( var k=j+1;k<arr.length;k++){
				let sum=arr[i]+arr[j]+arr[k];
				if(Math.abs(sum-targer)<=min){
					min=Math.abs(sum-target);
					ans=sum;
				}
				
			}
		}
	}
  return ans;
}

module.exports = threeSum;
