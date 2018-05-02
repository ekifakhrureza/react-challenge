import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Link } from 'react-router-dom'

class ListPlanet extends Component {
  constructor(props) {
    super(props)
    this.state = {

      data: []
    }
  }

  fetchDataPlanet() {
    axios.get('https://swapi.co/api/planets/')
      .then(response => {
        this.setState({ data: response.data.results })
        console.log(this.state.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchDataPlanet()
  }

  

  render() {
    const columns = [

      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Rotation Period',
        accessor: 'rotation_period'
      }, {
        Header: 'Orbital Period',
        accessor: 'orbital_period'
      },
      {
        Header: 'Diameter',
        accessor: 'diameter'
      },
      {
        Header: 'Climate',
        accessor: 'climate'
      },
      {
        Header: 'Details',
        accessor: 'url',
        Cell: value =>
          <Link to={`/${value.row.url.substring(value.row.url.length-2)}`}><button type="button" className="btn btn-warning">See More</button></Link>

      }
    ]
    return (
      <div>
        <h1>List Planet in Starwars</h1>
        <center>
          <div style={{ width: '85%' }}>
            <ReactTable
              data={this.state.data}
              columns={columns}
              defaultPageSize={5}
              className="-striped -highlight"
              width='100px'
            />
          </div>
        </center>
      </div>
    )
  }


}

export default ListPlanet

