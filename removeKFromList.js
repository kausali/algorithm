// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }


function removeKFromList (l, k){
    var prevNode = null;
    var node = l;
    var firstNode = l;
    
    while (node){
        if(node.value === k){
            if(prevNode){
                prevNode.next = node.next;
            }
            else{
                firstNode = node.next;
                // node = null
            }   
        }
        else{
            prevNode = node;
        }
            node = node.next;
        
    }
    return firstNode;
}