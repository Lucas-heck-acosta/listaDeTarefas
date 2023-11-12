import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barralateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <Barralateral mostarFiltros={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
