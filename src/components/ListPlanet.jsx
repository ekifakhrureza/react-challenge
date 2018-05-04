import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getData, clearData } from '../store/planet/actions'
import swal from 'sweetalert2';

class ListPlanet extends Component {

  fetchDataPlanet() {
    this.props.getData()
  }

  componentDidMount() {
    this.fetchDataPlanet()
  }

  componentWillMount() {
    // this.props.clearData()
  }

  render() {
    if (this.props.planets.loading) {
      return (
        <div>
          {
            swal.showLoading()
          }
        </div>
      )

    }
    else if (this.props.planets.error.status) {
      return (
        <div>
          {
            swal.hideLoading()
          }
          {
            swal.close()
          }
          <h2 style={{ color: 'red' }} >{this.props.planets.error.msg}</h2>
        </div>
      )
    }
    else {

      const columns = [

        {
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
        },
        {
          Header: 'Rotation Period',
          accessor: 'rotation_period'
        },
        {
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
          {
            swal.hideLoading()
          }
          {
            swal.close()
          }
          <h1>List Planet in Starwars</h1>
          <center>
            <div style={{ width: '85%' }}>
              <ReactTable
                data={this.props.planets.data}
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
}


const mapStateToProps = state => ({
  planets: state.data
})

// const mapDispatchToProps = (dispatch) => ({
//   getData: (data) => dispatch({
//     type: 'GET_DATA',
//     payload: data
//   }),
//   clearData: (data) => dispatch({
//     type: 'CLEAR_DATA',
//     payload: data
//   })
// })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListPlanet);