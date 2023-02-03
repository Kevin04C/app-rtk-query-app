export const ProjectForm = () => {
  const handleSumit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSumit}>
        <div>
          <label>Name project</label>
          <input type="text" name="name" placeholder="some name" />
        </div>
        <div>
          <label>Description project</label>
          <input type="text" name="name" placeholder="some description" />
        </div>
        <button type="submit">Create new project</button>
      </form>
    </div>
  )
}
