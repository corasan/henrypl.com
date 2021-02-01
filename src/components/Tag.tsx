import React from 'react'

type Props = {
  title: string
}

const Tag: React.FC<Props> = ({ title }: Props) => (
  <p className="px-2 py-1 bg-accent text-xs m-1 font-medium rounded">{title}</p>
)

export default Tag
