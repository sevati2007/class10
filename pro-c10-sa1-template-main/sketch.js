var weight=[35,38,40,45];
function avgweight(){
  var sum=weight[0]+weight[1]+weight[2]+weight[3];
  var avg=sum/weight.length
  console.log(avg)
}
function setup() 
{
  createCanvas(400,400);
  avgweight()
}

function draw() 
{
background(51);

}

