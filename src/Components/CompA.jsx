export default function handlechange(state,action){
    switch (action.type){
        case 'ADD':
            {
            return state+1;
            }
           case "SUB":
            {
                if(state>0){
                    return state-1;

                }
                else{
                    return state=0;
                }
            }
    
        default:
            break;
    }

}