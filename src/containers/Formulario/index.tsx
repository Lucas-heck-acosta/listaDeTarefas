import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/tarefas'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Prioridade, Status } from '../../utils/enums/Tarefa'
import { Form, Opcoes, Opcao } from './styles'
const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({ titulo, prioridade, descricao, status: Status.PENDENTE })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="titulo"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="descricao"
        />
        <Opcoes>
          <p>Prioridade</p>

          {Object.values(Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                type="radio"
                name="prioridade"
                value={prioridade}
                id={prioridade}
                defaultChecked={prioridade === Prioridade.NORMAL}
                onChange={(evento) =>
                  setPrioridade(evento.target.value as Prioridade)
                }
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
