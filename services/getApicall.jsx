

import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonapi=createApi(
    {   //base uri 
        reducerPath:"jsonapi",
        baseQuery: fetchBaseQuery({
            baseUrl:"https://jsonplaceholder.typicode.com/"
        }),


        keepUnusedDataFor:10,
        refetchOnFocus:true,
        // end point get/post/update 
        endpoints:(builder)=>(
            {
                Getposts:builder.query({query:()=>"posts"}),
                CteatePost: builder.mutation({
                    query:(newPost)=>({
                        url:"posts",
                        method:"POST",
                        body:newPost,
    
                    })
                })
               
    
            }
        )


    }
);
export const {useGetpostsQuery,useCteatePostMutation}=jsonapi;