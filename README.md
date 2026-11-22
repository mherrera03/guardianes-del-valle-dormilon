# Guardianes del Valle Dormilón

Prototipo de videojuego educativo sobre el **derecho a jugar y descansar**, para niñas y niños de 5 a 7 años.

Laboratorio I · Cómputo III · Universidad Gerardo Barrios

![Mapa del Valle Dormilón](docs/capturas/mapa.jpg)

## Cómo jugar

Abre `index.html` en Chrome o Edge. No hay que instalar nada y funciona sin internet. Sin conexión, el texto se muestra con una fuente más sencilla.

Don Plumas, el búho guía, da cada instrucción en voz alta con la voz del navegador, así que el niño no necesita saber leer. Si tocas al búho, repite la instrucción.

## La historia

Lumi es un espíritu de nube que brilla azul cuando tiene energía y está descansado, y se pone gris cuando está cansado o en peligro. Con Don Plumas y su amigo Saltarín, el niño acompaña a Lumi durante un día: juega seguro, juega con todos, escucha a su cuerpo y en la noche duerme a salvo de los Traviesos del Ruido.

## Niveles

| # | Nivel | Reto | Qué aprende del derecho | Habilidad |
|---|-------|------|-------------------------|-----------|
| 1 | Un Lugar Seguro para Jugar | Arrastrar escudos sobre los peligros del jardín | Jugar en lugares seguros | Causa y efecto |
| 2 | ¡Hora de Recreo! | Rompecabezas deslizante y saltar la cuerda | Jugar para aprender y divertirse | Razonamiento espacial |
| 3 | Todos Pueden Jugar | Elegir con respeto e invitar a todos a la ronda | Nadie se queda fuera del juego | Empatía |
| 4 | ¿Jugar o Descansar? | Leer las señales de Lumi y elegir qué necesita | Escuchar las señales del cuerpo | Autorregulación |
| 5 | El Ritual de las Estrellas | Apagar luces y pantallas, arropar y crear una canción de cuna | Una rutina para descansar | Secuencias y rutinas |
| 6 | El Sueño de Lumi | Reventar las burbujas de ruido hasta el amanecer | Dormir bien para jugar al día siguiente | Atención sostenida |

| | | |
|---|---|---|
| ![Nivel 1](docs/capturas/nivel1.jpg) | ![Nivel 2](docs/capturas/nivel2.jpg) | ![Nivel 3](docs/capturas/nivel3.jpg) |
| ![Nivel 4](docs/capturas/nivel4.jpg) | ![Nivel 5](docs/capturas/nivel5.jpg) | ![Nivel 6](docs/capturas/nivel6.jpg) |

## Características

- **Voz narrada:** las instrucciones se escuchan con la síntesis de voz del navegador, sin archivos de audio.
- **Errores amables:** si el niño se equivoca, recibe una explicación y puede intentarlo otra vez.
- **Recompensas:** de 1 a 3 estrellas por nivel, posturas de sueño para el Álbum de los Sueños, stickers para decorar la cabaña de Lumi y una medalla final.
- **Progreso guardado:** los niveles se desbloquean uno a uno y el avance se guarda en el navegador.
- **Panel docente** (botón del engranaje): abrir todos los niveles, activar o quitar la voz y los sonidos, y borrar el progreso.
- **Personajes y escenarios originales**, dibujados en SVG dentro del código.

## Estructura del proyecto

```
index.html      Juego compilado en un solo archivo (el que se abre)
build.py        Une los archivos de src/ en index.html
src/
  shell.html    Plantilla HTML
  style.css     Estilos
  art.js        Personajes, íconos y escenarios en SVG
  engine.js     Escenario, progreso, voz, sonidos y arrastre
  levels.js     Los 6 niveles
  screens.js    Inicio, presentación, mapa, álbum, cabaña y pantalla final
  boot.js       Arranque
docs/capturas/  Capturas para este README
```

## Cómo modificarlo

1. Edita los archivos de `src/`.
2. Ejecuta `python build.py` para generar de nuevo `index.html`.
3. Abre `index.html` en el navegador para probar.

## Integrantes

-Olga Michelle Gutierrez Rivera
-Mariana Herrera Márquez  
-Edwin René González Bonilla 
-Erick Fernando Mayen Castillo 
-Francisco René Ruiz Bolaños 
-Carlos Eduardo Mejia Luna
-Jonathan David Flores Dimas 
-Luis Antonio Barrera Zelaya 
-Fredy Alexander Funes Ortiz
