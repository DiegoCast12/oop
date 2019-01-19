### Guerrero

Modifica al constructor del `Guerrero` y agrega dos métodos: `attack()`, y `receiveDamage()`.

#### constructor
- debería recibir **2 argumentos** (health & strength)
- debería recibir **`health` property** como su **primer argumento**
- debería recibir **`strength` property** como su **segundo argumento**

#### `attack()` método
- debería ser una función
- debería recibir **0 argumentos**
- debería retornar la propiedad **`strength` del `Guerrero`**

#### `receiveDamage()` método
- debería ser una función
- debería recibir **1 argumento** (damage)
- debería quitar el damage recibido de la propiedad `health`
- **no debería retornar** nada


### Jedi

Un `Jedi` es un `Guerrero` con una propiedad adicional, su `name`. Tienen un diferente método de `receiveDamage()` y cuentan con uno nuevo, `battleCry()`.

Modifica `Jedi`, haz que herede las características de `Guerrero`, reimplementa el método de `receiveDamage()` para `Jedi`, agrega un nuevo método de `battleCry()`.

#### herencia
- `Jedi` debería heredar las características del `Guerrero` 

#### constructor
- debería recibir **3 argumentos** (name, health & strength)
- debería recibir la propiedad **`name`** como su **primer argumento**
- debería recibir la propiedad **`health`** como su **segundo argumento**
- debería recibir la propiedad **`strength`** como su **tercer argumento**

#### `attack()` método

Este método debería ser **heredado** de `Guerrero`, no es necesario reimplementarlo.

- debería ser una función
- debería recibir **0 argumentos**
- debería retornar la propiedad **`strength` del `Jedi`**

#### `receiveDamage()` método

Este método debería ser **reimplementado** para `Jedi` porque la versión `Jedi` necesita retornar valores diferentes.

- debería ser una función
- debería recibir **1 argumento** (damage)
- debería quitar el damage recibido de la propiedad `health` 
- **si el `Jedi` sigue vivo**, debería retornar **"NAME has received DAMAGE points of damage"**
- **si el `Jedi` muere**, debería retornar **"NAME has died in act of combat"**

#### `battleCry()` método

- debería ser una función
- debería recibir **0 argumentos**
- debería retornar **"May the force be with us!"**


### Sith

Un `Sith` es una versión diferente de `Guerrero`. Diferente a un `Jedi`, un `Sith` no tiene nombre. Su `receiveDamage()` también será diferente a la versión de `Guerrero`.

Modifica `Sith`, su constructor, su herencia de `Guerrero` y reimplementa el método de `receiveDamage()` por `Sith`.

#### herencia
- `Sith` debería heredar `Guerrero`

#### constructor
- debería recibir **2 argumentos** (health & strength)
- debería recibir la propiedad **`health`** como su **primer argumento**
- debería recibir la propiedad **`strength`** como su **segundo argumento**

#### `attack()` método

Este método debería ser **heredado** de `Guerrero`, no hay necesidad de reimplementarlo.

- debería ser una función
- debería recibir **0 argumentos**
- debería retornar la propiedad **`strength` del `Sith`**

#### `receiveDamage()` método

Este método debería ser reimplementado para `Sith` porque la versión `Sith` necesita valores diferentes.

- debería ser una función
- debería recibir **1 argumento** (damage)
- debería removerse el damage recibido de la propiedad `health`
- **Si el Sith sigue vivo**, debería retornar _**"A Sith has received DAMAGE points of damage"**_
- **Si el Sith muere**, debería retornar _**"A Sith has died in combat"**_

### Batalla

Nuestra clase `Batalla` permitirá tener una armada `Jedi` y una armada `Sith` para pelear entre ellos.

Modifica `Batalla` y agrega 5 métodos:
- `addJedi()`
- `addSith()`
- `jediAttack()`
- `sithAttack()`
- `showStatus()`

#### constructor 

Cuando creamos una `Batalla`, las armadas deberían estar vacías. Agregaremos soldados en las armadas más tarde.

- debería recibir **0 arguments**
- debería asignar a un arreglo vacío la propiedad jediArmy
- debería asignar a un arreglo vacío la propiedad sithArmy

#### `addJedi()` método

Agrega 1 `Jedi` a `jediArmy`. Si quieres agregar 10 `Jedi`, necesitas llamarlo 10 veces.

- debería ser una función
- debería recibir **1 argumento** (un objeto `Jedi`)
- debería recibir el `Jedi` a la armada
- no debería retornar nada

#### `addSith()` método

La versión `Sith` de `addJedi()`.

- debería ser una función
- debería recibir **1 argumento** (un objeto `Sith`)
- debería recibir el `Sith` a la armada
- no debería retornar nada

#### `JediAttack()` método

Un `Sith` (elegido al azar) tiene su `receiveDamage()` llamado con el daño igual al `strength` del Jedi (también elegido al azar). Esto permitirá ejecutar un único ataque y el Sith no podrá atacar de vuelta.

- debería ser una función
- debería recibir **0 argumentos**
- debería hacer un `Sith` `receiveDamage()` igual al `strength` de un `Jedi`
- debería remover los Sith muertos de la armada
- debería retornar el resultado de llamar **`receiveDamage()` de un `Sith`** con el `strength` del `Jedi`

#### `sithAttack()` método

La versión `Sith` de `jediAttack()`. Un `Jedi` recibe el daño igual al `strength` de un `Sith`.

- debería ser una función
- debería recibir **0 argumentos**
- debería hacer un `Jedi` `receiveDamage()` igual al `strength` de un `Sith`
- debería remover los Jedi muertos de la armada
- debería retornar el resultado de llamar **`receiveDamage()` de un `Jedi`** con el `strength` del `Sith`

#### `showStatus()` método

Retorna el status de la `Batalla` basado en el tamaño de la armada.

- debería ser una función
- debería recibir **0 argumentos**
- **Si el arreglo de `Sith` se acaba**, debería retornar _**"Jedis have won the war of the century!"**_
- **Si el arreglo de `Jedi` se acaba**, debería retornar _**"Sith have won the war of the century"**_
- **Si hay al menos 1 `Jedi` y 1 `Saxon`**, debería retornar _**"Jedis and Saxons are still in the thick of battle."**_