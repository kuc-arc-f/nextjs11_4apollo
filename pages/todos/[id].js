import Head from 'next/head'
import React from 'react'
//import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Todo from '../../graphql/todo'
import Layout from '../../components/layout'
//
function Page(props) {
  const item = props.item
console.log(item.id )
  return (
  <Layout>
    <div className="container">
      <div><h1>{item.title}</h1>
      </div>
      <div>ID : {item.id}
      </div>
      <hr />     
    </div>
  </Layout>
  )
}
/* getServerSideProps */
export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id;
console.log(id);
  const data = await client.query({
    query: Todo.get_query_todo(id),
    fetchPolicy: "network-only"
  });
  const item = data.data.todo;
console.log(data.data.todo);
  return {
    props: { item: item } 
  }
}
export default Page

