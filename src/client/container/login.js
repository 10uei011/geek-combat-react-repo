import React, {Component} from "react"
import { Link } from 'react-router-dom'

export default class  Login extends Component{
    render(){
        return(
            <div>
                Hi mechanix team
               	<Link to='/register'>register</Link> 	
            </div>
        )
    }
}