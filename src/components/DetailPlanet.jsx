import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDetail } from '../store/planet/actions'
import swal from 'sweetalert2';

class DetailPlanet extends Component {

  fetchDataDetail() {
    this.props.getDetail(this.props.match.params.id);

  }

  componentDidMount() {
    this.fetchDataDetail()
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
          <h2 style={{ color: 'red' }}>{this.props.planets.error.msg}</h2>
        </div>
      )
    }

    else {
      {
        swal.hideLoading()
      }
      {
        swal.close()
      }
      return (
        <div>
          <h1>Detail Planet</h1>
          <center>
            <table border='1'>
              {
                this.props.planets.data.map(function (data, index) {
                  return (
                    <thead key={data.name} className={data.name}>
                      <tr>
                        <th>Name</th>
                        <th>:</th>
                        <th>{data.name}</th>
                      </tr>
                      <tr>
                        <th>Climate</th>
                        <th>:</th>
                        <th>{data.climate}</th>
                      </tr>
                      <tr>
                        <th>Diameter</th>
                        <th>:</th>
                        <th>{data.diameter}</th>
                      </tr>
                      <tr>
                        <th>Gravity</th>
                        <th>:</th>
                        <th>{data.gravity}</th>
                      </tr>
                      <tr>
                        <th>Orbital Period</th>
                        <th>:</th>
                        <th>{data.orbital_period}</th>
                      </tr>
                      <tr>
                        <th>Population</th>
                        <th>:</th>
                        <th>{data.population}</th>
                      </tr>
                      <tr>
                        <th>Rotation Period</th>
                        <th>:</th>
                        <th>{data.rotation_period}</th>
                      </tr>
                      <tr>
                        <th>Surface Water</th>
                        <th>:</th>
                        <th>{data.surface_water}</th>
                      </tr>
                      <tr>
                        <th>Terrain</th>
                        <th>:</th>
                        <th>{data.terrain}</th>
                      </tr>
                    </thead>
                  );
                })
              }

            </table>

          </center>
          <br />
          <Link to={'/'}><button type="button" className="btn btn-success">Back</button></Link>
        </div>
      )
    }

  }
}


const mapStateToProps = state => ({
  planets: state.data
})

// const mapDispatchToProps = (dispatch) => ({
//   getDetail: (data) => dispatch({
//     type: 'GET_DETAIL',
//     payload: data
//   }),
//   clearData: (data) => dispatch({
//     type: 'CLEAR_DATA',
//     payload: data
//   })
// })

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDetail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailPlanet);

