/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    function xun(ll){
        var lists = [];
        while(ll!==null){
            lists.push(ll.val);
            ll=ll.next;
        }
        return lists;
    }
    var ll1=xun(l1);
    var ll2=xun(l2);
    
    let len=ll1.length
    if(len<ll2.length){
      len=ll2.length
    }
    let res=[0]
    for(let i = 0; i<len;i++){
      if(!ll1[i]){
        ll1[i]=0
      }
      if(!ll2[i]){
        ll2[i]=0
      }
      if(res[i]+ll1[i]+ll2[i]>9){
        res[i]=res[i]+ll1[i]+ll2[i]-10
        res[i+1]=1
      }else{
        res[i]=res[i]+ll1[i]+ll2[i]
        res[i+1]=0
      }
    }
    if(!res[res.length-1]){
      res.splice(-1,1)
    }
    function array2list(ary) {
    if(ary.length === 0) {
        return null
    }
    var nodes = []
    
    for(var i = 0; i < ary.length; i++) {
        var node = {}
        node.val = ary[i]
        node.next = null
        nodes.push(node)
    }

    for(var i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1]
    }

    return nodes[0]
}
    return array2list(res)
};