type Items = {
  id: string
  title: string
  cover_image: string
  tags: string
  url: string
  description: string
}

export interface DevToDataProps {
  data: Items[]
}
