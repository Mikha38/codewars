console.log('----------------------------Task:510 "Boggle Word Checker"----------------------------')
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));

function maxSum(root, arr = []) {
  let res = []
  if(!root.left && !root.right){
    res.push(arr)
  }
}

console.log(maxSum(root));

/*let ara =[ 
  ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"]
]
function BGW(grid, word, lvl1 = [0, grid.length], lvl2 = [0, grid.length]){
  for(let i = lvl1[0]; i < lvl1[1]; i++){
    for(let k = lvl2[0]; k < grid[i].length; k++){
      if(grid[k][i] === word.charAt(0)){
        console.log('Есть пробитие')
      }
    }
  }
}
console.log(BGW(ara, "INA"))*/