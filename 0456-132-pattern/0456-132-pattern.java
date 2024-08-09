class Solution {
    public boolean find132pattern(int[] arr) {
        int s=arr.length;
        Stack<Integer> temp=new Stack();
        int cur3=Integer.MIN_VALUE,cur1=Integer.MAX_VALUE;
        for(int i=s-1;i>=0;i--){
            cur1=arr[i];
            
            while(!temp.empty() && temp.peek()<arr[i]){
                cur3=temp.peek();
                temp.pop();
            }
            temp.push(arr[i]);
            if(cur1<cur3){
                return true;
            }
            
        }
        return false;
    }
}