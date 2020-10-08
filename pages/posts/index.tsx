import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NextPage } from "next";
import usePosts from "../../hooks/usePosts";

const PostsIndex: NextPage = () => {
  const {isLoading,isEmpty,posts  } = usePosts()
  return (
    <div>
      {
        isLoading ? <div>加载中</div> :
          isEmpty ? <div>没有文章</div> :
        posts.map(p=> <div>{p.title}</div>)
      }
    </div>
  )
}

export default PostsIndex