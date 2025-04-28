import React from 'react'
import ReactPlayer from 'react-player'

function MatFrac() {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto m-4'>
                
                
                <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
                    
                    <div className="w-full lg:w-1/2 pb-4">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/k0L-rB5eXG8' width="100%" />
                    </div>
                    
                    
                    </div>

                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/1ciDT7wKZFo' width="100%" />
                    </div>
                    
                    
                    </div>

                </div>

        </div>
        </div>
      )
    }

export default MatFrac