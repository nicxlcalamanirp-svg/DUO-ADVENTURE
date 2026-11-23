# DUO ADVENTURE: JUNTOS HASTA EL FINAL
Juego cooperativo online para exactamente 2 jugadores (HTML/CSS/JS + Canvas).

## Archivos
- `index.html`: el juego completo (menú, salas con código de 6 caracteres, selector de personajes, Mundo 1 con 4 niveles).
- `server.js` + `package.json`: servidor de salas (Node.js + ws) para jugar fuera de claude.ai.

## Cómo jugar online
1. Instala Node.js 18 o superior.
2. En esta carpeta: `npm install` y luego `npm start`.
3. Abre `http://localhost:3000`. Para jugar desde otra computadora, usa la IP de tu red (ej. `http://192.168.1.20:3000`) o despliega la carpeta en Render, Railway o Fly.io.
4. Jugador 1: CREAR SALA y comparte el código. Jugador 2: escribe el código y UNIRSE. El anfitrión elige nivel y pulsa JUGAR.

Dentro de claude.ai (como artefacto publicado) no hace falta servidor: `index.html` usa las salas integradas.

## Controles
A/D o flechas para moverse; Espacio, W, flecha arriba o Enter para saltar. Botones táctiles en móvil.

## Cómo añadir niveles (hasta 30)
Edita el arreglo `LV` en `index.html`. Campos: `w` mundo (0-4), `t` título, `o` objetivo, `W` ancho, `sp` spawns, `P` plataformas, `B` botones, `D` puertas con sus botones, `M` plataformas móviles, `X` caja, `C` checkpoints, `G` meta.
