### WIP

# Design Patterns


### Builder Design Pattern

```mermaid
classDiagram
    class StudentBuilder {
        <<interface>>
    }
    class EngineerStudentBuilder~StudentBuilder~ {
        
    }
    class EngineerStudentBuilder~StudentBuilder~ {

    }
    class Student {
        +Student(StudentBuilder builder)
    }
```