import { Header } from './components/Header'
import { ProjectForm } from './components/ProjectForm'
import { ProjectList } from './components/ProjectList'
import { Layout } from './Layout/Layout'

export const App = () => {
  return (
    <Layout>
      <Header />
      <ProjectForm />
      <ProjectList />
    </Layout>
  )
}
