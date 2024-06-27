class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        center = None
        for edge in edges:
            if center is None:
                center = {edge[0]: 1, edge[1]: 1}
                continue
            else:
                if edge[0] != edge[1]:
                    if edge[0] in center:
                        center[edge[0]] += 1
                    if edge[1] in center:
                        center[edge[1]] += 1
        for key in center:
            if center[key] == len(edges):
                return key
        return -1