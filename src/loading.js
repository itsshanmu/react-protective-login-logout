import React from 'react'
import {lazy,Suspense,Component} from 'react'

const Home = lazy(() =>import('./home'));

class Loading extends Component{
    render(){
        return(
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
          </Suspense>
        )
    }
}

export default Loading