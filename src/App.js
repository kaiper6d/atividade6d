import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component{
  state={
   estudantes:[
    {
      matricula: 74836,
      aluno:'Pedro',
      curso: 'informatica para internet',
      turma: '3 B'
    },
    {
      matricula: 21572,
      aluno:'Gabriel',
      curso: 'agronomia',
      turma: '2 C'
    },
    {
      matricula: 37497,
      aluno:'Thiago',
      curso: 'adiministração',
      turma: '3 A'
    }
   ]
  }

  render(){
    const {estudantes} = this.state; //atribuição via desustruturação
  return (
  <div className='div'>
    {estudantes.map(estudantes=>(
      <>
      <h1>{estudantes.matricula}</h1>
      <p>{estudantes.aluno}</p>
      <p>{estudantes.curso}</p>
      <p>{estudantes.turma}</p>
      </>
    ))}
</div>
)
}
}


export default App;