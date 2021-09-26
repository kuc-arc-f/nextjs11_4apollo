
import { gql} from '@apollo/client';

const todo = {
  get_gql_add : function(title){
    return gql`
      mutation {
        addTodo( title: "${title}") {
          id
          title
        }                
      }      
    `   
  },
  get_gql_update : function(id, title){
    return gql`
      mutation {
        updateTodo(id: ${id}, title: "${title}"){
          id
        }
      }            
    `   
  },
  get_gql_delete: function(id){
    return gql`
      mutation {
        deleteTodo(id: ${id}){
          id
        }
      }      
      
    `   
  },    
  get_query_todo : function(id){
    return gql`
    query {
      todo(id: ${id}){
        id
        title
      }            
    }
   `   
  },  
}
export default  todo;
/*
export const GET_TODOS = gql`
  query {
    todos {
      id
      title
    }
  }
`;
export const GET_TODO = gql`
  query GetTodo($id: Int!) {
    todo(id: $id) {
      id
      title
    }
  }
`;
export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
    }
  }
`;
export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!, $title : String!) {
    updateTodo(id: $id, title: $title) {
      id
      title
    }
  }
`;
export const DELETE_TODO = gql`
  mutation RemoveTodo ($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;*/
