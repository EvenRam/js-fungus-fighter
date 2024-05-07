






state:

Global totals for: 
-AP
    -`let hitpoints= 100`
-HP
    -`let attackPoints = 100`


Events:

##Button:

- when you click an attack button:
    - `onClick="attackHandler()"`
    - update state freaky fungus lose hit points (HP)
     -reduce attack points (AP)
     - HP AND AP set to zero


render:
-Update the Text about buttons:
    - attack buttons (eg, "100 AP")
    - enemy fungus (eg, "100 HP")

-If freaky fungus run out of HP:
    -Monster dies and you win:
    -replace the "walk" class with a "dead" class on feaky fungus element

-if AP run out:
    - monster wins humanity is doomed 
    - replace the "walk" class with a "jump" class on feaky fungus element

-if AP is 0
    - you cant attack
    - give all attack buttons a "disabled" attribute
