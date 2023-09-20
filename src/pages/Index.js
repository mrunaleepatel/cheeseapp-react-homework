import Post from "../components/Post";
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){
    const cheeses = useLoaderData()
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a Cheese</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="origin_country" placeholder="Origin country" />
            <input type="text" name="type" placeholder="Type" />
            <button>Create a new Cheese</button>
        </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>
}

export default Index;