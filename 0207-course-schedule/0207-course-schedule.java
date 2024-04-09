class Solution {
    HashMap<Integer, Set<Integer>> map = new HashMap<>();
    Set<Integer> visited = new HashSet<>();
    
    private boolean canFinish(int i) {
        if(visited.contains(i)) {
            return false;
        }
        visited.add(i);
        if(map.containsKey(i)) {
            for(int k: map.get(i)) {
                if(!canFinish(k)) return false;
            }
            map.remove(i);
        }
        visited.remove(i);
        return true;
    }
    
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        for(int[] pq: prerequisites) {
            if(!map.containsKey(pq[0])) {
                map.put(pq[0], new HashSet());
            }
            map.get(pq[0]).add(pq[1]);
        }
        for(int i=0; i<numCourses; i++) {
            // System.out.println(entry.getKey());
            if(!canFinish(i)) return false;
        }
        return true;
    }
}