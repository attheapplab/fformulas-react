import apis from '../apis/index.js'
import Navbar from '../components/navbar.js'

function App() {
  const [rows, setRows] = React.useState([])

  React.useEffect(() => {
    getHome()
  }, [])

  const getHome = () => {
    // fetchPlus('https://docs.google.com/spreadsheets/d/e/2PACX-1vRMp2NOi2zPiFY56k5MVp5YBAGYrsJGL-1CbcCRpwb14Y-eEn4KGLR2NBKXY-NTXFRxJkH_CY1D3fLh/pub?gid=0&single=true&output=csv')
    // .then(response => {
    //   const csvFields = response.split('\n')
    //   for (let i = 1; i < csvFields.length; i++) {
    //     const fields = csvFields[i].split(',')
    //     console.log(fields)
    //     const row = {
    //       name: fields[0],
    //       formula: fields[1]
    //     }
    //     setRows(rows => [ ...rows, row ])
    //   }
    // })
    apis('home').get().all()
    .then(response => {
      setRows(response)
    })
  }

  const formulas = 
  rows.map(row =>
    <article key={ row.name }>
      <p><b>{ row.name }</b></p>
      <div dangerouslySetInnerHTML={{ __html: row.equation }}></div>
    </article>
  )

  return (
    <React.Fragment>
      <Navbar>
      </Navbar>
      <hr>
      </hr>
      <math xmlns="http://www.w3.org/1998/Math/MathML"></math>
      <section>
        { formulas }
      </section>
    </React.Fragment>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root'))
