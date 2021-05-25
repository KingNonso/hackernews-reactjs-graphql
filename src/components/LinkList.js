import React from 'react'
import Link from './Link'
import { useQuery } from 'urql'
import gql from 'graphql-tag'


const FEED_QUERY = gql`
  {
    links {
      id
      createdAt
      url
      description
    }
  }
`
const LinkList = () => {
  const [result] = useQuery({ query: FEED_QUERY })
  const { data, fetching, error } = result

  if (fetching) return <div>Fetching</div>
  if (error) return <div>Error</div>

  const linksToRender = data.links

  return (
    <div>
      {linksToRender.map(link => <Link key={link.id} link={link} />)}
    </div>
  )
}

export default LinkList
