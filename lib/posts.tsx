import fs,{ promises as fsPromise } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const markdownDir = path.join(process.cwd(), 'markdown')

export const getPosts = async () => {
  const resArray:Array<Object> = []
  const fileNames = await fsPromise.readdir(markdownDir)
  fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName)
    const text = fs.readFileSync(fullPath, 'utf-8')
    const {data: {title, date}, content} = matter(text)
    resArray.push({title, date, content})
  })
  return resArray
}
