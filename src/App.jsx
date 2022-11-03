import ButtonMasna from './components/Button';
import MainLayout from './layouts/MainLayout';
import styles from './styles/App.module.css'
import { useState } from 'react';
import onDrop from './assets/sounds/onDrop.mp3'
import { Howl } from 'howler';
import offSound from './assets/sounds/offSound.mp3'
import onSound from './assets/sounds/onSound.mp3'

function App() {

  const [valor, setValor] = useState(0)
  const [saltos, setSaltos] = useState(1)

  const btnSonido = (src) => {
    const sound = new Howl({
      src: src,
      rate: 2,
      volume: 0.2,
      autoplay: false,
    })
    sound.play()
  }

  const resetSound = (src) => {
    const sound = new Howl({
      src: src,
      autoplay: false,
      volume: 0.2,
    })
    sound.play()
  }


  const hndRestar = () => {
    btnSonido(onDrop)
    setValor(valor - saltos)
  }

  const hndResetear = () => {
    setValor(0)
    resetSound(offSound)
  }

  const hndAumentar = () => {
    btnSonido(onDrop)
    setValor(valor + saltos)
  }

  const handleChange = (e) => {
    setSaltos(Number(e.target.value))
    resetSound(onSound)
  }

  return (
    <MainLayout>
        <h2 className={styles.subtitulo}>&lt;Laboratorio#10 /&gt; </h2>
        <h1 className={styles.titulomasna} data-text={valor.toString().padStart(2,0)}>{valor.toString().padStart(2,0)}</h1>
        <div className={styles.buttons}>
          <ButtonMasna value={`-${saltos}`} onClick={hndRestar} />
          <ButtonMasna ghost value={'reset'} onClick={hndResetear} />
          <ButtonMasna value={`+${saltos}`} onClick={hndAumentar}/>
        </div>
        <div style={{ marginTop: '1rem'}}>
          valor de {saltos} en 
          <select name="select" id="select" onChange={(e) => handleChange(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          masna!
        </div>
    </MainLayout>
  );
}

export default App;
