//import Link from 'next/link';
import React, {Component} from 'react';
import client from "../../apollo-client";
import Todo from '../../graphql/todo'
import Layout from '../../components/layout'
//
export default class TodoCreate extends Component {
  static async getInitialProps(ctx) {
    return { 
    }
  }  
  constructor(props){
    super(props)
    this.state = {title: '', content: '', _token : ''}
//console.log(props.BASE_URL)
  }
  componentDidMount(){
  }   
  handleClick(){
    this.add_item()
  } 
  async add_item(){
    try {
      const title = document.getElementById('title');
      const result = await client.mutate({
        mutation: Todo.get_gql_add(title.value)
      })
      return result
    } catch (error) {
      console.error(error);
      alert("Error, save item")
    }    
  } 
  render() {
    return (
      <Layout>
        <div className="container">
          <hr className="mt-2 mb-2" />
          <h1>Tasks - Create</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title:</label>
                <input type="text" className="form-control" name="title" id="title"
                  />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                  <label>Content:</label>
                  <input type="text" className="form-control" name="content" id="content" />
              </div>
            </div>
          </div><br />          
          <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Create
              </button>
          </div>                
          <hr />
        </div>
      </Layout>
    )    
  } 
}

