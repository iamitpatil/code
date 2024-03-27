### WIP

# Elevator

### Requirements
* Elevator should move up and down
* buttons to control the car
  * Inside elevator
  * on floors to call elevator
* dispatcher unit algorithm


```mermaid
classDiagram
    class ButtonPanel {
        <<interface>>
        +sendInstruction(int currFloor, int destFloor, int movingUp)
    }
    class FloorButtonPanel~ButtonPanel~ {
        +int currFloor
        +boolean movingUp
        +sendInstruction(int currFloor, int destFloor, int movingUp)
    }
    class ElevatorButtonPanel~ButtonPanel~ {
        +int destFloor
        +boolean movingUp
        +sendInstruction(int currFloor, int destFloor, int movingUp)
    }
    class ElevatorState {
        <<enumeration>>
        UP
        DOWN
        IDLE
    }
    class Elevator {
        +int capacity
        +ElevatorState state
    }
    class Dispatcher {
        +List~Elevator~
    }
    ButtonPanel <|-- FloorButtonPanel
    ButtonPanel <|-- ElevatorButtonPanel
```

ProcessRequest in one direction and for up we will have min heap
to go down 

Best Article 
https://tedweishiwang.github.io/journal/object-oriented-design-elevator.html
