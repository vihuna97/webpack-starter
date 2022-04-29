import '../css/componentes.css'
// import webPackImg from '../assets/imgs/webpack-logo.png'

export function saludar(nombre) {
    // const img = document.createElement('img');
    // img.src = webPackImg;
    // img.classList.add('img');
    // document.body.append(img);
    const h1 =document.createElement('h1');
    h1.innerText = `Hola ${nombre} !!!!`;
    document.body.append(h1);
    console.log('Esta funcion creó un H1');
    
}