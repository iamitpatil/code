class Solution {
public:
    bool find132pattern(vector<int>& arr){
       int n = arr.size();
       int dpmini[n];
       dpmini[0] = arr[0];
       for(int i = 1; i<n; i++){
           dpmini[i] = min(arr[i], dpmini[i-1]);
       }
       stack<int> st;
       for(int i = n-1; i>=0; i--){
           int maxPopped = INT_MIN;
           while(!st.empty() && st.top() < arr[i]) {
               maxPopped = max(maxPopped, st.top());
               st.pop();
           }
           st.push(arr[i]);
           if(maxPopped > dpmini[i]) return true;
       }
       return false;
    }
};