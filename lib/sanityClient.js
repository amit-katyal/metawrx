import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'a9pep4kt',
  dataset: 'production',
  apiVersion: '2022-05-18',
  token: 'skSvBqibCUR2Q7HptJMozvZZOdXwlzSqP9ORudN6pM4mepZGDt3bVOvmY0aN7w8foRIJIFZbYo9o8xcCokquiVRAIxrZrvXUkiFW1gmK6J8RV2Gb5sHlDIJ7Vr7wAWWxf3Dy5hwmc9RxMUURsT1GeMSkCLCLtI2wuEQ4a8Jc7bAiUxA3e6Uc',
  useCdn: false,
})
