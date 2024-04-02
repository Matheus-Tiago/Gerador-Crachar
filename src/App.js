import React, { useState } from "react";

function App() {
  const [foto, setFoto] = useState('')
  const [nome, setNome] = useState('')
  const [função, setFunção] =useState('')
  const [imgfundo, setImgFundo] = useState('fundo0')
  const [logo, setLogo] = useState('')
  return (
    <> 
    <body>
      
      <h1>Gerador de crachar</h1>
      <main>
        <div className='ladoEsquerdo'>
          <div className="itemForm">
            <label >Nome e Sobrenome: </label>
            <input type="text" placeholder="Digite seu nome..." onChange={(e)=> setNome(e.target.value)}></input>
          </div>  

          <div className="itemForm">
            <label>Função: </label>
            <input type="text" placeholder="Digite sua função na empresa..." onChange={(e)=> setFunção(e.target.value)}></input>
          </div>

          <div className="itemForm">
            <label >Nome Completo: </label>
            <input type="text" placeholder="Digite seu nome completo..." ></input>
          </div>

          <div className="itemForm">
            <label>CPF: </label>
            <input type="text" placeholder="Digite seu CPF..."></input>
          </div>

          <div className="itemForm">
            <label>RG: </label>
            <input type="text" placeholder="Digite seu RG..."></input>
          </div>
            
          <div className="itemForm">
            <label>Matrícula: </label>
            <input type="text" placeholder="Digite seu RG..."></input>
          </div>

          <div className="itemForm">
            <label>Setor: </label>
            <input type="text" placeholder="Digite seu Setor..."></input>
          </div>
          
          <div className="itemForm">
            <label>Adicione sua foto: </label>
            <input type="file" name='ffoto' onChange={(e)=> setFoto(e.target.files[0])}></input>

            </div>
            <div className="itemForm">
              <label>Adicione sua logomarca: </label>
              <input type="file" name='flogo' onChange={(e)=> setLogo(e.target.files[0])}></input>

            </div>

            <div className="itemForm">
            <label>modelo crachar: </label>
            <select onChange={(e)=> setImgFundo(e.target.value)}>
              <option
              value='fundo0'>semfundo</option>

              <option value='fundo1'>fundo1</option>

              <option value='fundo2'>fundo2</option>

              <option value='fundo3'>fundo3</option>
            </select>
          </div>
          


        </div>
        <div className="ladoDireito">
            <div className={imgfundo}>
              

              <div className="ptSuperior ">
                <div className="corte"></div>
                <div className="logomarca">
                  {logo ? <img src={URL.createObjectURL(logo)} width='200px' height='50px' padding='10px'></img>:<img src=""></img>}
                </div>
              </div>

              <div className="ptMeio ">
                <div>
                {foto ?  <img src={URL.createObjectURL(foto)} width='110px' height='125px'></img>: <img src=""></img>}
                </div>

              </div>

              <div className="ptInferior ">
                <div>
                  <div className="quadroNF">
                    <p className="pMaior">{nome}</p>
                    <p >{função}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
      
    </body>
    </>
  );
}

export default App;
