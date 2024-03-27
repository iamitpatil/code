### WIP

# Design Patterns


### Chain of Responsibility Design Pattern


    
Read uncommitted  -->   read and write no locks                                                 OCC

read committed    -->   read shared lock for read only, write exclusive lock                    OCC

repeatable read   -->   read shared lock till trx end, write exclusive lock                     PCC

serializable      -->   read shared lock till trx end in range,  write exclusive lock           PCC