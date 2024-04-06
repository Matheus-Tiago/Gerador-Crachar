import React, { useState } from "react";
import './App.css';

function App() {
  const [foto, setFoto] = useState('')
  const [nome, setNome] = useState('') 
  const [sobrenome, setSobrenome] = useState('') 
  const [funcao, setFuncao] =useState('')
  const [cpf, setCpf] =useState('')
  const [rg, setRg] =useState('')
  const [matricula, setMatricula] =useState('')
  const [setor, setSetor] =useState('')
  const [imgfundo, setImgFundo] = useState('fundo0')
  const [logo, setLogo] = useState('')
  
  return (
    <> 
      <main>
        <section className="inputInformation">
            <h1>Gerador de crachá</h1>
          
          <div className='ladoEsquerdo'>


            <div className="itemForm">
              <label >Nome: </label>
              <input type="text" placeholder="Digite seu nome..." value={nome} onChange={(e)=> setNome(e.target.value)} />
            </div>  

            <div className="itemForm">
              <label >Sobrenome: </label>
              <input type="text" placeholder="Digite seu nome..." value={sobrenome} onChange={(e)=> setSobrenome(e.target.value)} />
            </div>  

            <div className="itemForm">
              <label>Função: </label>
              <input type="text" placeholder="Digite sua função na empresa..." value={funcao} onChange={(e)=> setFuncao(e.target.value)} />
            </div>

            <div className="itemForm">
              <label>CPF: </label>
              <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={(e)=> setCpf(e.target.value)} />
            </div>

            <div className="itemForm">
              <label>RG: </label>
              <input type="text" placeholder="Digite seu RG..." value={rg} onChange={(e)=> setRg(e.target.value)}/>
            </div>
              
            <div className="itemForm">
              <label>Matrícula: </label>
              <input type="text" placeholder="Digite seu RG..." value={matricula} onChange={(e)=> setMatricula(e.target.value)}/>
            </div>

            <div className="itemForm">
              <label>Setor: </label>
              <input type="text" placeholder="Digite seu Setor..." value={setor} onChange={(e)=> setSetor(e.target.value)}/>
            </div>
            
            <div className="itemForm">
              <label>Adicione sua foto: </label>
              <input type="file" name='ffoto' onChange={(e)=> setFoto(e.target.files[0])} />

              </div>
              <div className="itemForm">
                <label>Adicione sua logomarca: </label>
                <input type="file" name='flogo' onChange={(e)=> setLogo(e.target.files[0])} />

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

        </section>
          
        <section>

          <div className="ladoDireito frontCard">
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
                      <p className="pMaior textFrontCard">{nome}</p>
                      <p className="textFrontCard">{funcao}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

        </section>

        <section>    

          <div className="ladoDireito tras">
              <div className={imgfundo}>
                
                <div className="ptInferior ">
                  <div>
                    <div className="quadroNF">
                      <p >{`${nome} ${sobrenome}`}</p>
                    </div>
                  </div>
                </div>

                <div className="ptInferior ">
                  <div>
                    <div className="quadroNF">
                      <p >{funcao}</p>
                    </div>
                  </div>
                </div>

                <div className="ptInferior ">
                  <div>
                    <div className="quadroNF">
                      <p >{cpf}</p>
                    </div>
                  </div>
                </div>

                <div className="ptInferior ">
                  <div>
                    <div className="quadroNF">
                      <p >{rg}</p>
                    </div>
                  </div>
                </div>

                <div className="ptInferior ">
                  <div>
                    <div className="quadroNF">
                      <p >{matricula}</p>
                    </div>
                  </div>
                </div>

                <div className="ptInferior ">
                  <div>
                    <div className="quadroNF">
                      <p >{setor}</p>
                    </div>
                  </div>
                </div>
              
              </div>
          </div>

        </section>
      </main>
    </>
  );
}

export default App;
