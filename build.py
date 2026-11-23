"""Une los archivos de src/ en un solo index.html que funciona sin servidor."""
import pathlib

raiz = pathlib.Path(__file__).parent
src = raiz / 'src'
plantilla = (src / 'shell.html').read_text(encoding='utf-8')
css = (src / 'style.css').read_text(encoding='utf-8')
# El orden importa: arte -> motor -> niveles -> pantallas -> arranque
js = '\n'.join((src / f).read_text(encoding='utf-8') for f in ['art.js', 'engine.js', 'levels.js', 'screens.js', 'boot.js'])
salida = plantilla.replace('/*STYLE*/', css).replace('/*SCRIPT*/', js)
(raiz / 'index.html').write_text(salida, encoding='utf-8')
print(f'index.html generado ({len(salida):,} bytes)')
