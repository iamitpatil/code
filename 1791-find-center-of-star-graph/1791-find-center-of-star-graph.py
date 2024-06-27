class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        center = None
        for edge in edges:
            if center is None:
                center = {edge[0]: 1, edge[1]: 1}
                continue
            else:   
                for node in edge:
                    if node in center:
                        center[node] += 1
        for key in center:
            if center[key] == len(edges):
                return key