class MyStack:

    def __init__(self):
        self.queue = []
        

    def push(self, x: int) -> None:
        self.queue.append(x)
        

    def pop(self) -> int:
        for element in self.queue:
            temp = self.queue.pop(0)
            self.queue.append(temp)
        
        return self.queue.pop()
        

    def top(self) -> int:
        for element in self.queue:
            temp = self.queue.pop(0)
            self.queue.append(temp)
        
        temp = self.queue.pop()
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