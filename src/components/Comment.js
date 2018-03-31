import React from 'react'
import {Link} from 'react-router-dom'
import {timeFormat} from '../utils'

const Comment = ({by, time, kids}) => {
  if (kids) {

  }
  return (
    <li class="comment">
    <div class="by">
      <Link to={`/user/${by}`}>{by}</Link>
      {timeFormat(time)} ago
    </div>
    <div class="text" v-html="comment.text"></div>
    <div class="toggle" :class="{ open }" v-if="comment.kids && comment.kids.length">
      <a @click="open = !open">{{
        open
            ? '[-]'
            : '[+] ' + pluralize(comment.kids.length) + ' collapsed'
      }}</a>
    </div>
    <ul class="comment-children" v-show="open">
      <comment v-for="id in comment.kids" :key="id" :id="id"></comment>
    </ul>
  </li>
  )
}
