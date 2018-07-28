import showBlog from './components/showBlog'
import addBlog from './components/addBlog'
import SingleBlog from './components/SingleBlog'
import lifeBlog from './components/lifeBlog'
import technologyBlog from './components/technologyBlog'
import profileBlog from './components/profileBlog'
import leavMessBlog from './components/leavMessBlog'

export default[
    {path:"/",component:showBlog},
    {path:"/add",component:addBlog},
    {path:"/life",component:lifeBlog},
    {path:"/technology",component:technologyBlog},
    {path:"/profile",component:profileBlog},
    {path:"/leavMess",component:leavMessBlog},
    {path:"/blog/:id",component:SingleBlog}
]