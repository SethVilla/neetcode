class MyStack:

    def __init__(self):
        self.queue = []
        

    def push(self, x: int) -> None:
        self.queue.append(x)
        

    def pop(self) -> int:
        n = len(self.queue) - 1
        i = 0
        while i != n: 
            temp = self.queue.pop(0)
            self.queue.append(temp)
            i = i + 1
        
        return self.queue.pop(0)
        

    def top(self) -> int:
        n = len(self.queue) - 1
        i = 0
        while i != n: 
            temp = self.queue.pop(0)
            self.queue.append(temp)
            i = i + 1
        
        temp = self.queue.pop(0)
        self.queue.append(temp)
        return temp
        

    def empty(self) -> bool:
        return True if len(self.queue) == 0 else False
        


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()