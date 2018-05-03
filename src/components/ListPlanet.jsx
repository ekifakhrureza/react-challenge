import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ListPlanet extends Component {

  fetchDataPlanet() {
    axios.get('https://swapi.co/api/planets/')
      .then(response => {
        this.props.getData(response.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchDataPlanet()
  }

  componentWillMount() {
    this.props.clearData()
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
          <Link to={`/${value.row.url.substring(value.row.url.length - 2)}`}><button type="button" className="btn btn-warning">See More</button></Link>

      }
    ]
    return (
      <div>
        <h1>List Planet in Starwars</h1>
        <center>
          <div style={{ width: '85%' }}>
            <ReactTable
              data={this.props.data}
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


const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch({
    type: 'GET_DATA',
    payload: data
  }),
  clearData: (data) => dispatch({
    type: 'CLEAR_DATA',
    payload: data
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPlanet);