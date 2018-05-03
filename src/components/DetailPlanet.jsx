import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DefaultPlanet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  fetchDataPlanet() {
    axios.get(`https://swapi.co/api/planets/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ data: [response.data] })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchDataPlanet()
  }

  render() {
    return (
      <div>
        <h1>Detail Planet</h1>
        <center>
          <table border='1'>
              {
                this.state.data.map(function (data, index) {
                  console.log(data);
                  
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

export default DefaultPlanet

