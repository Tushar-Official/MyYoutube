import React from 'react';


const commentsData=[
    {
        name:"Tushar Kumar",
        text:"Lorem ipsum",
        replies:[

        ]
    },
    {
        name:"Tushar Kumar",
        text:"Lorem ipsum",
        replies:[
            
        ]
    },
    {
        name:"Tushar Kumar",
        text:"Lorem ipsum",
        replies:[
            {
                name:"Tushar Kumar",
                text:"Lorem ipsum",
                replies:[
                    
                ]
            }
            
        ]
    },
    {
        name:"Tushar Kumar",
        text:"Lorem ipsum",
        replies:[
            {
                name:"Tushar Kumar",
                text:"Lorem ipsum",
                replies:[
                    
                ]
            }
            
        ]
    },
    {
        name:"Tushar Kumar",
        text:"Lorem ipsum",
        replies:[
            
        ]
    }
,
{
    name:"Tushar Kumar",
    text:"Lorem ipsum",
    replies:[
        
    ]
},
{
    name:"Tushar Kumar",
    text:"Lorem ipsum",
    replies:[
        
    ]
}

];

const Comment=({data})=>{
   const {name,text,replies}=data;
    return(
        
        <div className='bg-gray-100 flex  shadow-sm rounded'>
        <img 
        className='h-8 w-8 m-2'
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
        alt="user"/>
        <div className='px-3'>
        <p className=' font-bold'>{name}</p>
        <p className=''>{text}</p>
        </div>
        </div>
    )

}

const CommentList=({comments})=>{
    return comments.map((comment,index)=>(
        <div>
    
    <Comment key={index} data={comment}/>
    <div className='pl-5 border border-l-black ml-5'>
    <CommentList comments={comment.replies}/>
    </div>
    </div>
    ));
   
    
};
const CommentsContainer=()=>{
    return(
        <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comments={commentsData}/>
        </div>
    )
}

export default CommentsContainer