import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo != undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()
  return (
    <MainContainer>
      <Titulo as="p">
        {tarefas.length}{' '}
        {tarefas.length === 1 ? 'tarefa encontrada' : 'tarefas encontradas'}
        {valor !== undefined ? ` como "${valor}"` : ' no total'}
      </Titulo>

      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeTarefas
