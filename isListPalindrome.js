// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    var arr = [];
    let node = l;
    let firstNode = l;
    
    
    while (node){
        arr.push(node.value);
        node = node.next;
    }
    while(firstNode){
        var idx = arr.length;
        if(arr[idx -1] === firstNode.value){
            arr.pop();
            firstNode = firstNode.next;
        }
        else{
            return false;
        }
    }
    if(arr.length === 0){
        return true;
    }
}
