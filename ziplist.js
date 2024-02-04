const list2 = [1, 2, 3];
const list1 = ['a', 'b', 'c'];
function zipList(first, second) {
  const resultList = [];
  for (let i = 0; i < first.length; i++) {
    resultList.push(first[i], second[i]);
  }

  return resultList;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(first, second) {
  return _.flatten(_.zip(first, second));
}

console.log(zipListTheSimpleWay(list1, list2));
